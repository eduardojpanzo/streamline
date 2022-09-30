import { GetProjectTasksController} from "./GetUserProjectsController";
import { GetProjectTasksUseCase } from "./GetProjectTasksUseCase";
import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";


const projectsRepository = new ProjectsRepository();

const getProjectTasksUseCase = new GetProjectTasksUseCase(projectsRepository);

export const getProjectTasksController = new GetProjectTasksController(getProjectTasksUseCase)