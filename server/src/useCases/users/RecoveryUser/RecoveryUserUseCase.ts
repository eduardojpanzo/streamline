import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { UserInfo } from "../../../types";

export class RecoveryUserUseCase{
    constructor(private usersRepository:IUsersRepository){}

    async execute(userId:string):Promise<UserInfo>{
        const user = await this.usersRepository.findById(userId);
        
        if (!user) {
            throw new Error("user not Registed");
        }

        const userInfo = await this.usersRepository.getUser(user.email);

        return {
                id: userInfo.id,
                name:userInfo.name,
                email:userInfo.email,
                avatarImg:userInfo.avatarImg,
                projects: userInfo.projects,
                tasks: userInfo.tasks
            }
    }
}