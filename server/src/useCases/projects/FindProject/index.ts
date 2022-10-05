import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";
import { FindProjectFromIdController } from "./FindProjectFromIdController";
import { FindProjectFromIdUseCase} from "./FindProjectFromIdUseCase";

const projectsRepository = new ProjectsRepository();

const findProjectFromIdUseCase = new FindProjectFromIdUseCase(projectsRepository);

export const findProjectFromIdController = new FindProjectFromIdController(findProjectFromIdUseCase)