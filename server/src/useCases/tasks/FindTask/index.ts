import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";
import { FindTaskFromNameController } from "./FindTaskFromNameController";
import { FindTaskFromNameUseCase } from "./FindTaskFromNameUseCase";

const tasksRepository = new TasksRepository();

const findTaskFromNameUseCase = new FindTaskFromNameUseCase(tasksRepository);

export const findTaskFromNameController = new FindTaskFromNameController(findTaskFromNameUseCase)