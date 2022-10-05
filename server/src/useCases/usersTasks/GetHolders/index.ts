import { UsersTasksRepository } from "../../../repositories/Implementations/UsersTasksRepository";
import { GetHoldersController } from "./GetHoldersController";
import { GetHoldersUseCase } from "./GetHoldersUseCase";


const usersTasksRepository = new UsersTasksRepository();

const getHoldersUseCase = new GetHoldersUseCase(usersTasksRepository);

export const getHoldersController = new GetHoldersController(getHoldersUseCase)