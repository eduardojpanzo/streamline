import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


const usersRepository = new UsersRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)

export const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)