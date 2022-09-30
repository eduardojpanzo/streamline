import { UsersProjectsRepository } from "../../../repositories/Implementations/UsersProjectsRepository";
import { BecomeMemberController } from "./BecomeMemberController";
import { BecomeMemberUseCase } from "./BecomeMemberUseCase";

const usersProjectsRepository =  new UsersProjectsRepository();

const becomeMemberUseCase = new BecomeMemberUseCase(usersProjectsRepository);

export const becomeMemberController = new BecomeMemberController(becomeMemberUseCase)