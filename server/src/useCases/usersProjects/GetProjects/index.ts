import { UsersProjectsRepository } from "../../../repositories/Implementations/UsersProjectsRepository";
import { GetProjectsController } from "./GetProjectsController";
import { GetProjectsUseCase } from "./GetProjectsUseCase";


const usersProjectsRepository = new UsersProjectsRepository();

const getProjectsUseCase = new GetProjectsUseCase(usersProjectsRepository);

export const getProjectsController = new GetProjectsController(getProjectsUseCase)