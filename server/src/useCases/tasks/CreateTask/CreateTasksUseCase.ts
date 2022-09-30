import { ITasksRepository } from "../../../repositories/ITasksRepository";
import { IUsersTasksRepository } from "../../../repositories/IUsersTasksRepository";
import { ICreateTaskDTO} from "../../../types/dto";

export class CreateTasksUseCase {
    constructor (
        private tasksRepository:ITasksRepository,
        private usersTasksRepository: IUsersTasksRepository
    ){}

    async execute({
        name,
        description,
        projectId,
        status,
        color,
        userId
    }:ICreateTaskDTO):Promise<void>{

        const taskAlreadyExists = await this.tasksRepository.checkIfTheTaskAlreadyExists({
            name,
            projectId
        });
        
        if (taskAlreadyExists) {
            throw new Error("task already exists");
        }
        
        const task = await this.tasksRepository.create({            
            name,
            description,
            projectId,
            status,
            color,
        })

        if (!task) {
            throw new Error("Some things is Wrong in data");
        }

        const userTask = await this.usersTasksRepository.setTaskHolder({
            taskId: task.id,
            userId
        })
    }
}