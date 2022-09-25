import { prismaClient } from "../../database/prisma";
import bcrypt from 'bcrypt'

import { User } from "../../model/User";
import { ICreateUserDTO } from "../../types/dto";
import { IUsersRepository } from "../IUsersRepository";
import { Project } from "../../model/Project";

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
        const hashPassword = await bcrypt.hash(password, 10)
        
        await prismaClient.user.create({
            data:{
                email,
                name,
                password:hashPassword
            }
        })
    };

    async getUserProjects(authorId: string):Promise<Project[]>{
        const projects = await prismaClient.project.findMany({
            where:{
                authorId
            }
        })

        return projects;
    }

}
