import { UsersProjectsRepository } from "../../../repositories/Implementations/UsersProjectsRepository";
import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { BecomeAdminController } from "./BecomeAdminController";
import { BecomeAdminUseCase } from "./BecomeAdminUseCase";

const usersProjectsRepository =  new UsersProjectsRepository();
const usersRepository = new UsersRepository()

const becomeAdminUseCase = new BecomeAdminUseCase(usersProjectsRepository,usersRepository);

export const becomeAdminController = new BecomeAdminController(becomeAdminUseCase)