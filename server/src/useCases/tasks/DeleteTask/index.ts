import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";
import { DeleteTaskController } from "./DeleteTaskController";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

const tasksRepository = new TasksRepository()

const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository)

export const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)