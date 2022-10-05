import { UserProject } from "../../../model/UserProject";
import { IUsersProjectsRepository } from "../../../repositories/IUsersProjectsRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IBecomeAdminDTO } from "../../../types/dto";

export class BecomeAdminUseCase{
    constructor(
        private usersProjectsRepository: IUsersProjectsRepository,
        private usersRepository: IUsersRepository
    ){}

    async execute({userId,email,projectId}:IBecomeAdminDTO):Promise<UserProject>{

        const user = await this.usersRepository.findByEmail(email);
        
        const isNewIdAdmin = await this.usersProjectsRepository.checkIfIsAdminProject({
            userId: user.id,
            projectId
        })

        if (isNewIdAdmin) {
            throw new Error("This is already Admin, cant not be again");
        }

        const newAdmincreated = await this.usersProjectsRepository.setProjectAdmin({
            userId:user.id,
            projectId
        })

        if (!newAdmincreated) {
            throw new Error("Some thing is wrong");
        }
        
        return newAdmincreated
    }
}