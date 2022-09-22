import { TasksRepository } from "../../../repositories/Implementations/TasksRepository";
import { FindTaskFromNameController } from "./FindTaskFromNameController";
import { FindTaskFromNameUseCase } from "./FindTaskFromNameUseCase";

const tasksRepository = new TasksRepository();

const findTaskFromNameUseCase = new FindTaskFromNameUseCase(tasksRepository);

const findTaskFromNameController = new FindTaskFromNameController(findTaskFromNameUseCase)

export {findTaskFromNameController}