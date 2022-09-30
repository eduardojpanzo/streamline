import { prismaClient } from "../../database/prisma";
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

    //buscar os task Holder de um projecto


    //buscar as task de um user em especifico

}