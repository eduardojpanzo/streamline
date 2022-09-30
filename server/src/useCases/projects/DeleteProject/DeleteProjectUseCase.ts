import { Project } from "../../../model/Project";
import { IProjectsRepository } from "../../../repositories/IProjectsRepository";

export class DeleteProjectUseCase {
    constructor(
        private projectsRePository:IProjectsRepository
    ){}

    async execute(projectId:string):Promise<Project>{
        const deletedProject = await this.projectsRePository.delete(projectId);

        if (!deletedProject) {
            throw new Error("project not exists, can delete");
        }

        return deletedProject
    }
}