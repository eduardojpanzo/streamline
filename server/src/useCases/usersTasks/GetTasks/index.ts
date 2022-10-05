import { UsersTasksRepository } from "../../../repositories/Implementations/UsersTasksRepository";
import { GetTasksController } from "./GetTasksController";
import { GetTasksUseCase } from "./GetTasksUseCase";


const usersTasksRepository = new UsersTasksRepository();

const getTasksUseCase = new GetTasksUseCase(usersTasksRepository);

export const getTasksController = new GetTasksController(getTasksUseCase)