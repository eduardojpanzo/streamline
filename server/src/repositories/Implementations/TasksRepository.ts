import { prismaClient } from "../../database/prisma";
import { Task } from "../../model/Task";
import { ICreateTaskDTO, IGhangeTaskDTO } from "../../types/dto";

import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {
    
    async create({name,description,status,projectId,color}:ICreateTaskDTO):Promise<Task>{
        const tasks = await  prismaClient.task.create({
            data:{
                name,
                description,
                status,
                projectId,
                color
            }
        })

        return tasks
    } ;
    
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
    
    async changeTaskStatus({ taskId, nextStatus }: IGhangeTaskDTO):Promise<Task>{
       const task =  await prismaClient.task.update({
            where:{
                id:taskId
            },
            data:{
                status:nextStatus
            }
        });

        return task;
    }
}