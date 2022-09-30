import { UserTask } from "../../../model/UserTask";
import { IUsersTasksRepository } from "../../../repositories/IUsersTasksRepository";
import {  IBecomeTaskHolderDTO } from "../../../types/dto";

export class BecomeTaskHolderUseCase{
    constructor(
        private usersTasksRepository: IUsersTasksRepository
    ){}

    async execute({userId,id,taskId}:IBecomeTaskHolderDTO):Promise<UserTask>{
        
        const isNewIdTaskHolder = await this.usersTasksRepository.checkIfIsTaskHolder({
            userId: id,
            taskId
        })

        if (isNewIdTaskHolder) {
            throw new Error("This is already TaskHolder, cant not be again");
        }

        const taskHolderCreated = await this.usersTasksRepository.setTaskHolder({
            userId:id,
            taskId
        })

        if (!taskHolderCreated) {
            throw new Error("Some thing is wrong");
        }
        
        return taskHolderCreated
    }
}