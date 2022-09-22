import { Project } from "../../../model/Project";
import { IProjectsRepository } from "../../../repositories/IProjectsRepository";

export class FindProjectFromNameUseCase {
    constructor (private projectsRepository:IProjectsRepository){}

    async execute(name:string):Promise<Project>{
        const project = await this.projectsRepository.findByName(name)
        
        if (!project) {
            throw new Error("project not exists");
        }

        return project;
    }
}