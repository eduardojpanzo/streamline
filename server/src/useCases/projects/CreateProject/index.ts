import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";
import { UsersProjectsRepository } from "../../../repositories/Implementations/UsersProjectsRepository";
import { CreateProjectsController } from "./CreateProjectsController";
import { CreateProjectsUseCase } from "./CreateProjectsUseCase";


const projectsRepository = new ProjectsRepository();
const uersProjectsRepository = new UsersProjectsRepository();

const createProjectsUseCase = new CreateProjectsUseCase(projectsRepository,uersProjectsRepository);

export const createProjectsController = new CreateProjectsController(createProjectsUseCase);