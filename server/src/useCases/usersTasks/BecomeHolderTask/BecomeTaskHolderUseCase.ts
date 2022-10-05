import { UserTask } from "../../../model/UserTask";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUsersTasksRepository } from "../../../repositories/IUsersTasksRepository";
import {  IBecomeTaskHolderDTO } from "../../../types/dto";

export class BecomeTaskHolderUseCase{
    constructor(
        private usersTasksRepository: IUsersTasksRepository,
        private usersRepository: IUsersRepository
    ){}

    async execute({userId,email,taskId}:IBecomeTaskHolderDTO):Promise<UserTask>{
        const user = await this.usersRepository.findByEmail(email);
        
        const isNewIdTaskHolder = await this.usersTasksRepository.checkIfIsTaskHolder({
            userId: user.id,
            taskId
        })

        if (isNewIdTaskHolder) {
            throw new Error("This is already TaskHolder, cant not be again");
        }

        const taskHolderCreated = await this.usersTasksRepository.setTaskHolder({
            userId:user.id,
            taskId
        })

        if (!taskHolderCreated) {
            throw new Error("Some thing is wrong");
        }
        
        return taskHolderCreated
    }
}