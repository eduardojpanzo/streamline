import { Task } from "../../../model/Task";
import { ProjectsRepository } from "../../../repositories/Implementations/ProjectsRepository";

export class GetProjectTasksUseCase {
    constructor(private projectsRepository: ProjectsRepository){}

    async execute(projectId:string):Promise<Task[]>{
        const tasks = await this.projectsRepository.getProjectTasks(projectId);

        if (!tasks) {
            return []
        }
        return tasks
    }
}