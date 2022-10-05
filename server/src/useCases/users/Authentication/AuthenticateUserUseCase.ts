import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { IAuthenticateUserDTO } from '../../../types/dto';

export class AuthenticateUserUseCase {
    constructor(private usersRepository:IUsersRepository) {}

    async execute({email,password}:IAuthenticateUserDTO){

        const user = await this.usersRepository.getUser(email);
        
        if (!user) {
            throw new Error("Email or password is Incorrent");
        }

        const passWordMath = await bcrypt.compare(password,user.password);
        if (!passWordMath) {
            throw new Error("Email or password is incorrent");
        }

        const token = sign(
            {id: user.id},
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: user.id,
                expiresIn:"1d"
            }
        );

        return {
            token,
            user:{
                id: user.id,
                name:user.name,
                email:user.email,
                avatarImg:user.avatarImg,
            }
        };
    }
}