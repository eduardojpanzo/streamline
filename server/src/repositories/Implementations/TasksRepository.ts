import { prismaClient } from "../../database/prisma";
import { Task } from "../../model/Task";
import { ICheckTaskDTO, ICreateTaskDTO, IGhangeTaskDTO } from "../../types/dto";

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

    async checkIfTheTaskAlreadyExists({name,projectId}:ICheckTaskDTO):Promise<Task>{
        const task = await prismaClient.task.findFirst({
            where:{
                name,
                projectId
            }
        })

        return task;
    }

    async delete(taskId: string):Promise<Task>{
        const deletedTask = await prismaClient.task.delete({
            where:{
                id:taskId
            }
        })

        if (!deletedTask) {
            throw new Error("Tasks not exists to delete");
        }

        return deletedTask
    }

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