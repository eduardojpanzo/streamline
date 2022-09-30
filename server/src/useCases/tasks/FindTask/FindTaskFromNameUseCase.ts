import { Task } from "../../../model/Task";
import { ITasksRepository } from "../../../repositories/ITasksRepository";

export class FindTaskFromNameUseCase {
    constructor (private tasksRepository:ITasksRepository){}

    async execute(name:string):Promise<Task>{
        const task = await this.tasksRepository.findByName(name)
        
        if (!task) {
            throw new Error("Task not exists");
        }

        return task;
    }
}