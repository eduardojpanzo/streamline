import { CreateTasksController } from "./CreateUsersController";
import { CreateTasksUseCase } from "./CreateTasksUseCase";
import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";


const tasksRepository = new TasksRepository();

const createTasksUseCase = new CreateTasksUseCase(tasksRepository);

const createTasksController = new CreateTasksController(createTasksUseCase);

export { createTasksController}