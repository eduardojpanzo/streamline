import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { GetUserProjectsController } from "./GetUserProjectsController";
import { GetUserProjectsUseCase } from "./GetUserProjectsUseCase";


const usersRepository = new UsersRepository();

const getUserProjectsUseCase = new GetUserProjectsUseCase(usersRepository);

export const getUserProjectsController = new GetUserProjectsController(getUserProjectsUseCase)