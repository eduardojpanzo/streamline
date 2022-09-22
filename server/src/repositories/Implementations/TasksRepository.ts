import { prismaClient } from "../../database/prisma";
import { Task } from "../../model/Task";
import { ICreateTaskDTO } from "../../types/dto";

import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {
    async findById(id: string):Promise<Task>{
         const task = await prismaClient.task.findFirst({
            where:{
                id
            }
         })

         return task;
    };

    async findByName(name: string):Promise<Task>{
        const task = await prismaClient.task.findFirst({
           where:{
               name
           }
        })

        return task;
   };
    
    async create({name,description,status,projectId}:ICreateTaskDTO):Promise<void>{
       await  prismaClient.task.create({
           data:{
            name,
            description,
            status,
            projectId
           }
        })
    } ;

}