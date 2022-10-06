import { prismaClient } from "../../database/prisma";
import bcrypt from 'bcrypt'

import { User } from "../../model/User";
import { ICreateUserDTO } from "../../types/dto";
import { IUsersRepository } from "../IUsersRepository";
import { Project } from "../../model/Project";
import { UsersProjectsRepository } from "./UsersProjectsRepository";
import { UsersTasksRepository } from "./UsersTasksRepository";
import { UserInfo } from "../../types";

export class UsersRepository implements IUsersRepository {
    private usersProjectsRepository = new UsersProjectsRepository();
    private usersTasksRepository = new UsersTasksRepository();


    async findById(id: string):Promise<User>{
        const user = await prismaClient.user.findFirst({
            where:{
                id
            },
            select:{
                id:true,
                name:true,
                avatarImg:true,
                email:true
            }
        })
        
        return user;
    };
    
    async findByEmail(email: string):Promise<User>{
        const user = await prismaClient.user.findFirst({
            where:{
                email
            },
            select:{
                id:true,
                name:true,
                avatarImg:true,
                email:true
            }
        })

         return user;
    };
    
    async create({email,name,password}:ICreateUserDTO):Promise<User>{
        const hashPassword = await bcrypt.hash(password, 10)
        
        const user = await prismaClient.user.create({
            data:{
                email,
                name,
                password:hashPassword
            },
            select:{
                id:true,
                name:true,
                avatarImg:true,
                email:true
            }
        })

        return user
    };

    async getUser(email: string):Promise<UserInfo>{
        const user = await prismaClient.user.findFirst({
           where:{
               email
           }
        })

        const projects = await this.usersProjectsRepository
            .getUserProjects(user.id);
        
        const tasks = await this.usersTasksRepository
            .getUserTasks(user.id);

        return {
            ...user,
            projects,
            tasks
        };
   } ;

    async getUserProjects(authorId: string):Promise<Project[]>{
        const projects = await prismaClient.project.findMany({
            where:{
                authorId
            }
        })

        return projects;
    }

}
