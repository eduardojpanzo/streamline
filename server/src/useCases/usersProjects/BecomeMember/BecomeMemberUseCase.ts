import { UserProject } from "../../../model/UserProject";
import { IUsersProjectsRepository } from "../../../repositories/IUsersProjectsRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IBecomeMemberDTO } from "../../../types/dto";

export class BecomeMemberUseCase{
    constructor(
        private usersProjectsRepository: IUsersProjectsRepository,
        private usersRepository: IUsersRepository
    ){}

    async execute({userId,email,projectId}:IBecomeMemberDTO):Promise<UserProject>{
        const user = await this.usersRepository.findByEmail(email);

        const isNewIdMember = await this.usersProjectsRepository.checkIfIsProjectMember({
            userId: user.id,
            projectId
        })

        if (isNewIdMember) {
            throw new Error("This is already Member, cant not be again");
        }

        const newMembercreated = await this.usersProjectsRepository.setProjectMember({
            userId:user.id,
            projectId
        })

        if (!newMembercreated) {
            throw new Error("Some thing is wrong");
        }
        
        return newMembercreated
    }
}