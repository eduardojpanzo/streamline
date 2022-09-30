import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";
import { DeleteProjectController } from "./DeleteProjectController";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";

const projectsRepository = new ProjectsRepository()

const deleteProjectUseCase = new DeleteProjectUseCase(projectsRepository)

export const deleteProjectController = new DeleteProjectController(deleteProjectUseCase)