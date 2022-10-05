import { prismaClient } from "../../database/prisma";
import { Project } from "../../model/Project";
import { Task } from "../../model/Task";
import { ProjectInfo } from "../../types";

import { ICheckProjectDTO, ICreateProjectDTO} from "../../types/dto";
import { IProjectsRepository } from "../IProjectsRepository";
import { UsersProjectsRepository } from "./UsersProjectsRepository";

export class ProjectsRepository implements IProjectsRepository {
    private usersProjectsRepository = new UsersProjectsRepository()

    async create({name,description,authorId,color}:ICreateProjectDTO):Promise<Project>{
        const project = await prismaClient.project.create({
            data:{
                name,
                description,
                authorId,
                color
            }
        })

        return project
    };

    async checkIfProjectExist({name,authorId}:ICheckProjectDTO):Promise<Project>{
        const project = await prismaClient.project.findFirst({
            where:{
                name,
                authorId
            }
        })

        return project;
    }

    async deleteMany(projectId:string):Promise<Project>{
        const project = await prismaClient.project.delete({
            where:{
                id:projectId
            }
        })

        return project
    }

    async findByName(name: string):Promise<Project>{
         const project = await prismaClient.project.findFirst({
            where:{
                name
            }
         })

         return project;
    };

    async findById(id: string):Promise<ProjectInfo>{
         const project = await prismaClient.project.findFirst({
            where:{
                id
            }
         })

         const users = await this.usersProjectsRepository.getProjectUsers(id);
         const tasks = await this.getProjectTasks(id);

         return {project,users,tasks}
    };

    async getProjectTasks(projectId: string):Promise<Task[]>{
        const tasks =  await prismaClient.task.findMany({
            where:{
                projectId
            }
        })
        
        return tasks;
    }

    async delete(projectId:string):Promise<Project>{

        const deletedProject = await prismaClient.project.delete({
            where:{
                id:projectId
            }
        })

        if (!deletedProject) {
            throw new Error("Project not exists to delete");
        }

        return deletedProject
    }
}