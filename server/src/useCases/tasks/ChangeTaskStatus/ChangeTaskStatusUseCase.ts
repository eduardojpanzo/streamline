import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";
import { IGhangeTaskDTO } from "../../../types/dto";

export class ChangeTaskStatusUseCase {
    constructor(private tasksRepository: TasksRepository) {}

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