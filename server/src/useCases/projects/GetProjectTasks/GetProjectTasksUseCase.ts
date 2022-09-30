import { Task } from "../../../model/Task";
import { IProjectsRepository } from "../../../repositories/IProjectsRepository";

export class GetProjectTasksUseCase {
    constructor(private projectsRepository: IProjectsRepository){}

    async execute(projectId:string):Promise<Task[]>{
        const tasks = await this.projectsRepository.getProjectTasks(projectId);

        if (!tasks) {
            return []
        }
        return tasks
    }
}