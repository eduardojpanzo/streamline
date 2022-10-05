import { IProjectsRepository } from "../../../repositories/IProjectsRepository";
import { ProjectInfo } from "../../../types";

export class FindProjectFromIdUseCase {
    constructor (private projectsRepository:IProjectsRepository){}

    async execute(projectId:string):Promise<ProjectInfo>{
        const projectInfo = await this.projectsRepository.findById(projectId)
        
        if (!projectInfo) {
            throw new Error("project not exists");
        }

        return projectInfo;
    }
}