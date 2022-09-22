import { prismaClient } from "../../database/prisma";
import { Project } from "../../model/Project";

import { ICreateProjectDTO} from "../../types/dto";
import { IProjectsRepository } from "../IProjectsRepository";

export class ProjectsRepository implements IProjectsRepository {
    async findByName(name: string):Promise<Project>{
         const project = await prismaClient.project.findFirst({
            where:{
                name
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