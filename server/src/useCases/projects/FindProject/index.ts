import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";
import { FindProjectFromNameController } from "./FindProjectFromNameController";
import { FindProjectFromNameUseCase } from "./FindProjectFromNameUseCase";

const projectsRepository = new ProjectsRepository();

const findProjectFromNameUseCase = new FindProjectFromNameUseCase(projectsRepository);

const findProjectFromNameController = new FindProjectFromNameController(findProjectFromNameUseCase)

export {findProjectFromNameController}