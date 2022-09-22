import { prismaClient } from "../../database/prisma";
import { User } from "../../model/User";

import { ICreateUserDTO } from "../../types/dto";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    async findById(id: string):Promise<User>{
        const user = await prismaClient.user.findFirst({
            where:{
                id
            }
         })

         return user;
    };

    async findByEmail(email: string):Promise<User>{
         const user = await prismaClient.user.findFirst({
            where:{
                email
            }
         })

         return user;
    } ;
    
    async create({email,name,password}:ICreateUserDTO):Promise<void>{
        await prismaClient.user.create({
            data:{
                email,
                name,
                password
            }
        })
    } ;

}
