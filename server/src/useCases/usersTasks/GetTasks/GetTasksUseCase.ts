import { Task } from "../../../model/Task";
import { IUsersTasksRepository } from "../../../repositories/IUsersTasksRepository";

export class GetTasksUseCase {
    constructor(private usersTasksRepository: IUsersTasksRepository){}

    async execute(userId:string):Promise<Task[]>{
        const tasks = await this.usersTasksRepository.getUserTasks(userId);

        if (!tasks) {
            return
        }
        
        return tasks
    }
}