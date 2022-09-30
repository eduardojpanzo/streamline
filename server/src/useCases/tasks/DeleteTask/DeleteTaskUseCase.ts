import { Task } from "../../../model/Task";
import { ITasksRepository } from "../../../repositories/ITasksRepository";

export class DeleteTaskUseCase {
    constructor(
        private tasksRePository:ITasksRepository
    ){}

    async execute(taskId:string):Promise<Task>{
        const deletedTask = await this.tasksRePository.delete(taskId);

        if (!deletedTask) {
            throw new Error("task not exists, can delete");
        }

        return deletedTask
    }
}