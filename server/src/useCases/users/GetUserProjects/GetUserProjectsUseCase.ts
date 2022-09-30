import { Project } from "../../../model/Project";
import { UsersRepository } from "../../../repositories/Implementations/UsersRepository";

export class GetUserProjectsUseCase {
    constructor(private usersRepository: UsersRepository){}

    async execute(authorId:string):Promise<Project[]>{
        const projects = await this.usersRepository.getUserProjects(authorId);

        if (!projects) {
            return []
        }
        return projects
    }
}