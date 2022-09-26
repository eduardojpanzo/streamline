import { IProjectsRepository } from "../../../repositories/IProjectsRepository";
import { ITasksRepository } from "../../../repositories/ITasksRepository";
import { ICreateTaskDTO} from "../../../types/dto";

export class CreateTasksUseCase {
    constructor (
        private tasksRepository:ITasksRepository,
        private projectsRepository: IProjectsRepository
    ){}

    async execute({name,description,projectId,status}:ICreateTaskDTO):Promise<void>{

        const taskAlreadyExists = await this.tasksRepository.findByName(name);

        const currentProject = await this.projectsRepository.findById(projectId);
        // console.log(`${currentProject} "check if in the current Project, there is the same task name, that we wont created"`);
        
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