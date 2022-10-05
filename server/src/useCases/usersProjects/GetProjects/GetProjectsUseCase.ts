import { Project } from "../../../model/Project";
import { IUsersProjectsRepository } from "../../../repositories/IUsersProjectsRepository";
import { UserProjects } from "../../../types";

export class GetProjectsUseCase {
    constructor(private usersProjectsRepository: IUsersProjectsRepository){}

    async execute(userId:string):Promise<UserProjects>{
        const projects = await this.usersProjectsRepository.getUserProjects(userId);

        if (!projects) {
            return
        }
        
        return projects
    }
}