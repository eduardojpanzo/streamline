import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";
import { CreateProjectsController } from "./CreateUsersController";
import { CreateProjectsUseCase } from "./CreateUsersUseCase";


const projectsRepository = new ProjectsRepository();

const createProjectsUseCase = new CreateProjectsUseCase(projectsRepository);

const createProjectsController = new CreateProjectsController(createProjectsUseCase);

export { createProjectsController}