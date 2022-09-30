import { IUsersRepository } from "../../../repositories/IUsersRepository";
import {IGetUserDTO} from '../../../types/dto'

export class RecoveryUserUseCase{
    constructor(private usersRepository:IUsersRepository){}

    async execute(userId:string):Promise<IGetUserDTO>{
        const user = await this.usersRepository.findById(userId);
        
        if (!user) {
            throw new Error("user not Registed");
        }

        return {
            id:user.id,
            name:user.name,
            email:user.email,
            avatarImg:user.avatarImg,
        };
    }
}