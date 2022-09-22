import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { CreateUsersController } from "./CreateUsersController";
import { CreateUsersUseCase } from "./CreateUsersUseCase";


const usersRepository = new UsersRepository();

const createUsersUseCase = new CreateUsersUseCase(usersRepository);

const createUsersController = new CreateUsersController(createUsersUseCase);

export { createUsersController}