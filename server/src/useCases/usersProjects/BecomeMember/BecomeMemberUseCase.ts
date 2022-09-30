import { UserProject } from "../../../model/UserProject";
import { IUsersProjectsRepository } from "../../../repositories/IUsersProjectsRepository";
import { IBecomeMemberDTO } from "../../../types/dto";

export class BecomeMemberUseCase{
    constructor(
        private usersProjectsRepository: IUsersProjectsRepository
    ){}

    async execute({userId,id,projectId}:IBecomeMemberDTO):Promise<UserProject>{
        
        const isNewIdMember = await this.usersProjectsRepository.checkIfIsProjectMember({
            userId: id,
            projectId
        })

        if (isNewIdMember) {
            throw new Error("This is already Member, cant not be again");
        }

        const newMembercreated = await this.usersProjectsRepository.setProjectMember({
            userId:id,
            projectId
        })

        if (!newMembercreated) {
            throw new Error("Some thing is wrong");
        }
        
        return newMembercreated
    }
}