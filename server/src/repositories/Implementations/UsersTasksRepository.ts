import { prismaClient } from "../../database/prisma";
import { Task } from "../../model/Task";
import { User } from "../../model/User";
import { UserTask } from "../../model/UserTask";
import { ISetHolderDTO } from "../../types/dto";
import { IUsersTasksRepository } from "../IUsersTasksRepository";

export class UsersTasksRepository implements IUsersTasksRepository {
    
    async setTaskHolder({userId,taskId}: ISetHolderDTO):Promise<UserTask>{
        const userTask = await prismaClient.holderTask.create({
            data:{
                userId,
                taskId
            }
        })

        return userTask;
    }

    async checkIfIsTaskHolder({userId,taskId}: ISetHolderDTO):Promise<UserTask>{
        const userTask = await prismaClient.holderTask.findFirst({
            where:{
                userId,
                taskId
            }
        })

        return userTask;
    }

    async getUserTasks(userId:string):Promise<Task[]>{
        const tasks = await prismaClient.task.findMany({
            where:{
                HolderTask:{
                    some:{
                        userId
                    }
                }
            }
        })

        return tasks
    }
    
    async getTasksHolders(taskId:string):Promise<User[]>{
        const users = await prismaClient.user.findMany({
            where:{
                HolderTask:{
                    some:{
                        taskId
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

        return users
    }


}