import { IProjectsRepository } from "../../../repositories/IProjectsRepository";
import { IUsersProjectsRepository } from "../../../repositories/IUsersProjectsRepository";
import { ICreateProjectDTO} from "../../../types/dto";

export class CreateProjectsUseCase {
    constructor (
        private projectsRepository:IProjectsRepository,
        private usersProjectsRepository: IUsersProjectsRepository
    ){}

    async execute({name, description,authorId,color}:ICreateProjectDTO):Promise<void>{

        const projectAlreadyExists = await this.projectsRepository.checkIfProjectExist({
            name,
            authorId
        });
        
        if (projectAlreadyExists) {
            throw new Error("Project already exists");
        }
        
        const project = await this.projectsRepository.create({            
            name,
            description,
            authorId,
            color
        })

        if (!project) {
            throw new Error("Somethings is wrongs");
        }

        const userProject = await this.usersProjectsRepository.setProjectAdmin({
            userId: authorId,
            projectId: project.id
        })
    }
}