import { CreateTasksController } from "./CreateTasksController";
import { CreateTasksUseCase } from "./CreateTasksUseCase";
import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";
import { UsersTasksRepository } from "../../../repositories/Implementations/UsersTasksRepository";


const tasksRepository = new TasksRepository();
const usersTasksRepository = new UsersTasksRepository();

const createTasksUseCase = new CreateTasksUseCase(tasksRepository,usersTasksRepository);

export const createTasksController = new CreateTasksController(createTasksUseCase);