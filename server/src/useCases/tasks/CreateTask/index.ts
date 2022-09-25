import { CreateTasksController } from "./CreateUsersController";
import { CreateTasksUseCase } from "./CreateTasksUseCase";
import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";
import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";


const tasksRepository = new TasksRepository();
const projectsRepository = new ProjectsRepository();

const createTasksUseCase = new CreateTasksUseCase(tasksRepository,projectsRepository);

export const createTasksController = new CreateTasksController(createTasksUseCase);