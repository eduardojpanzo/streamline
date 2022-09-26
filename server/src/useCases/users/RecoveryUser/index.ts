import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { RecoveryUserController } from "./RecoveryUserController";
import { RecoveryUserUseCase } from "./RecoveryUserUseCase";


const usersRepository = new UsersRepository();

const recoveryUserUseCase = new RecoveryUserUseCase(usersRepository)

export const recoveryUserController = new RecoveryUserController(recoveryUserUseCase);