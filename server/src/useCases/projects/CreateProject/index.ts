import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";
import { CreateProjectsController } from "./CreateProjectsController";
import { CreateProjectsUseCase } from "./CreateProjectsUseCase";


const projectsRepository = new ProjectsRepository();

const createProjectsUseCase = new CreateProjectsUseCase(projectsRepository);

export const createProjectsController = new CreateProjectsController(createProjectsUseCase);