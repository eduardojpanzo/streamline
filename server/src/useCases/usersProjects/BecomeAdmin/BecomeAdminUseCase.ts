import { UserProject } from "../../../model/UserProject";
import { IUsersProjectsRepository } from "../../../repositories/IUsersProjectsRepository";
import { IBecomeAdminDTO } from "../../../types/dto";

export class BecomeAdminUseCase{
    constructor(
        private usersProjectsRepository: IUsersProjectsRepository
    ){}

    async execute({userId,id,projectId}:IBecomeAdminDTO):Promise<UserProject>{
        
        const isNewIdAdmin = await this.usersProjectsRepository.checkIfIsAdminProject({
            userId: id,
            projectId
        })

        if (isNewIdAdmin) {
            throw new Error("This is already Admin, cant not be again");
        }

        const newAdmincreated = await this.usersProjectsRepository.setProjectAdmin({
            userId:id,
            projectId
        })

        if (!newAdmincreated) {
            throw new Error("Some thing is wrong");
        }
        
        return newAdmincreated
    }
}