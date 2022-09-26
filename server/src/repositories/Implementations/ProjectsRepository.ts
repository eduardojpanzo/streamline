import { prismaClient } from "../../database/prisma";
import { Project } from "../../model/Project";
import { Task } from "../../model/Task";

import { ICreateProjectDTO} from "../../types/dto";
import { IProjectsRepository } from "../IProjectsRepository";

export class ProjectsRepository implements IProjectsRepository {
    async getProjectTasks(projectId: string):Promise<Task[]>{
        const tasks =  await prismaClient.task.findMany({
            where:{
                projectId
            }
        })
        
        return tasks;
    }

    async findByName(name: string):Promise<Project>{
         const project = await prismaClient.project.findFirst({
            where:{
                name
            }
         })

         return project;
    };

    async findById(id: string):Promise<Project>{
         const project = await prismaClient.project.findFirst({
            where:{
                id
            }
         })

         return project;
    };
    
    async create({name,description,authorId}:ICreateProjectDTO):Promise<void>{
        await prismaClient.project.create({
            data:{
                name,
                description,
                authorId
            }
        })
    } ;

}