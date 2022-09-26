import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";
import { ChangeTaskStatusController } from "./ChangeTaskStatusController";
import { ChangeTaskStatusUseCase } from "./ChangeTaskStatusUseCase";


const tasksRepository = new TasksRepository()

const changeTaskStatusUseCase = new ChangeTaskStatusUseCase(tasksRepository)

export const changeTaskStatusController = new ChangeTaskStatusController(changeTaskStatusUseCase);