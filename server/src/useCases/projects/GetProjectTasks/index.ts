import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { GetProjectTasksController} from "./GetUserProjectsController";
import { GetProjectTasksUseCase } from "./GetProjectTasksUseCase";
import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";


const projectsRepository = new ProjectsRepository();

const getProjectTasksUseCase = new GetProjectTasksUseCase(projectsRepository);

export const getUserProjectsController = new GetProjectTasksController(getProjectTasksUseCase)