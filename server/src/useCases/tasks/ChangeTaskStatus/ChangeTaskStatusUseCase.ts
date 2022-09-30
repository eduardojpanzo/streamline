import { ITasksRepository } from "../../../repositories/ITasksRepository";
import { IGhangeTaskDTO } from "../../../types/dto";

export class ChangeTaskStatusUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    async execute({taskId,nextStatus}:IGhangeTaskDTO){

        const task = this.tasksRepository.changeTaskStatus({
            taskId,
            nextStatus
        });

        if (!task) {
            throw new Error("Task Not Found to update");
        }

        return task
    }
}