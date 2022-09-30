import { prismaClient } from "../../database/prisma";
import { UserProject } from "../../model/UserProject";
import { IMemberProjectDTO, ISetAdminDTO } from "../../types/dto";
import { IUsersProjectsRepository } from "../IUsersProjectsRepository";

export class UsersProjectsRepository implements IUsersProjectsRepository {

    async setProjectAdmin({userId,projectId}:ISetAdminDTO):Promise<UserProject>{
        const userProject = await prismaClient.adminProject.create({
            data:{
                userId,
                projectId
            }
        })
        
        return userProject;
    }

    async checkIfIsAdminProject({userId,projectId}: ISetAdminDTO):Promise<UserProject>{
        const userProject = await prismaClient.adminProject.findFirst({
            where:{
                userId,
                projectId
            }
        })

        return userProject
    }

    async setProjectMember({userId,projectId}: IMemberProjectDTO):Promise<UserProject>{
        const userProject = await prismaClient.memberProject.create({
            data:{
                userId,
                projectId
            }
        })
        
        return userProject;
    }

    async checkIfIsProjectMember({userId,projectId}: ISetAdminDTO):Promise<UserProject>{
        const userProject = await prismaClient.memberProject.findFirst({
            where:{
                userId,
                projectId
            }
        })

        return userProject
    }
}