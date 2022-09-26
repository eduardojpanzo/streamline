import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import {IGetUserDTO} from '../../../types/dto'

export class RecoveryUserUseCase{
    constructor(private usersRepository:UsersRepository){}

    async execute(userId:string):Promise<IGetUserDTO>{
        const user = await this.usersRepository.findById(userId);
        
        if (!user) {
            throw new Error("user not Registed");
        }

        return {
            id:user.id,
            name:user.name,
            email:user.email,
            avatar_img:user.avatar_img,
        };
    }
}