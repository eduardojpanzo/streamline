import { IProjectsRepository } from "../../../repositories/IProjectsRepository";
import { ICreateProjectDTO} from "../../../types/dto";

export class CreateProjectsUseCase {
    constructor (private projectsRepository:IProjectsRepository){}

    async execute({name, description,authorId}:ICreateProjectDTO):Promise<void>{

        const userAlreadyExists = await this.projectsRepository.findByName(name);
        
        if (userAlreadyExists) {
            throw new Error("Project already exists");
        }
        
        await this.projectsRepository.create({            
            name,
            description,
            authorId
        })
    }
}