import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { FindUserFromEmailController } from "./FindUserFromEmailController";
import { FindUserFromEmailUseCase } from "./FindUserFromEmailUseCase";

const usersRepository = new UsersRepository();

const findUserFromEmailUseCase = new FindUserFromEmailUseCase(usersRepository);

export const findUserFromEmailController = new FindUserFromEmailController(findUserFromEmailUseCase)