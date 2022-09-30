import { UsersProjectsRepository } from "../../../repositories/Implementations/UsersProjectsRepository";
import { BecomeAdminController } from "./BecomeAdminController";
import { BecomeAdminUseCase } from "./BecomeAdminUseCase";

const usersProjectsRepository =  new UsersProjectsRepository();

const becomeAdminUseCase = new BecomeAdminUseCase(usersProjectsRepository);

export const becomeAdminController = new BecomeAdminController(becomeAdminUseCase)