import { ITasksRepository } from "../../../repositories/ITasksRepository";
import { ICreateTaskDTO} from "../../../types/dto";

export class CreateTasksUseCase {
    constructor (private tasksRepository:ITasksRepository){}

    async execute({name,description,projectId,status}:ICreateTaskDTO):Promise<void>{

        const taskAlreadyExists = await this.tasksRepository.findByName(name);
        
        if (taskAlreadyExists) {
            throw new Error("task already exists");
        }
        
        await this.tasksRepository.create({            
            name,
            description,
            projectId,
            status
        })
    }
}