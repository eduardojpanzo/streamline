import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { UsersTasksRepository } from "../../../repositories/Implementations/UsersTasksRepository";
import { BecomeTaskHolderController } from "./BecomeHolderTaskController";
import { BecomeTaskHolderUseCase } from "./BecomeTaskHolderUseCase";

const usersTasksRepository =  new UsersTasksRepository();
const usersRepository = new UsersRepository();

const becomeTaskHolderUseCase = new BecomeTaskHolderUseCase(usersTasksRepository,usersRepository);

export const becomeTaskHolderController = new BecomeTaskHolderController(becomeTaskHolderUseCase)