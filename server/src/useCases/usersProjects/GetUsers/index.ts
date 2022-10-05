import { UsersProjectsRepository } from "../../../repositories/Implementations/UsersProjectsRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";


const usersProjectsRepository = new UsersProjectsRepository();

const getUsersUseCase = new GetUsersUseCase(usersProjectsRepository);

export const getUsersController = new GetUsersController(getUsersUseCase)