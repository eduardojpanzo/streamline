import { prismaClient } from "../../database/prisma";
import { UserProject } from "../../model/UserProject";
import { ProjectUsers, UserProjects } from "../../types";
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

    async setProjectMember({userId,projectId}: IMemberProjectDTO):Promise<UserProject>{
        const userProject = await prismaClient.memberProject.create({
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

    async checkIfIsProjectMember({userId,projectId}: ISetAdminDTO):Promise<UserProject>{
        const userProject = await prismaClient.memberProject.findFirst({
            where:{
                userId,
                projectId
            }
        })

        return userProject
    }

    async getUserProjects(userId:string):Promise<UserProjects>{
        const adminProjects = await prismaClient.project.findMany({
            where:{
                AdminProject:{
                    some:{
                        userId
                    }
                }
            }
        })

        const othersProjects = await prismaClient.project.findMany({
            where:{
                MemberProject:{
                    some:{
                        userId
                    }
                }
            }
        })

        return {adminProjects,othersProjects}
    }

    async getProjectUsers(projectId:string):Promise<ProjectUsers>{
        const admins = await prismaClient.user.findMany({
            where:{
                AdminProject:{
                    some:{
                        projectId
                    }
                }
            },select:{
                id:true,
                name:true,
                email:true,
                avatarImg:true
            }
        })

        const members = await prismaClient.user.findMany({
            where:{
                MemberProject:{
                    some:{
                        projectId
                    }
                }
            },
            select:{
                id:true,
                name:true,
                email:true,
                avatarImg:true
            }
        })

        return {admins,members}
    }    
}