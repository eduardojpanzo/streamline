import { UsersProjectsRepository } from "../../../repositories/Implementations/UsersProjectsRepository";
import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";
import { BecomeMemberController } from "./BecomeMemberController";
import { BecomeMemberUseCase } from "./BecomeMemberUseCase";

const usersProjectsRepository =  new UsersProjectsRepository();
const usersRepository = new UsersRepository();

const becomeMemberUseCase = new BecomeMemberUseCase(usersProjectsRepository, usersRepository);

export const becomeMemberController = new BecomeMemberController(becomeMemberUseCase)