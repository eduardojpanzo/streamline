import { UsersTasksRepository } from "../../../repositories/Implementations/UsersTasksRepository";
import { BecomeTaskHolderController } from "./BecomeHolderTaskController";
import { BecomeTaskHolderUseCase } from "./BecomeTaskHolderUseCase";

const usersTasksRepository =  new UsersTasksRepository();

const becomeTaskHolderUseCase = new BecomeTaskHolderUseCase(usersTasksRepository);

export const becomeTaskHolderController = new BecomeTaskHolderController(becomeTaskHolderUseCase)