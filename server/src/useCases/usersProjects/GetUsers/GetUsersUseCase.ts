import { IUsersProjectsRepository } from "../../../repositories/IUsersProjectsRepository";
import { ProjectUsers} from "../../../types";

export class GetUsersUseCase {
    constructor(private usersProjectsRepository: IUsersProjectsRepository){}

    async execute(projectId:string):Promise<ProjectUsers>{
        const users = await this.usersProjectsRepository.getProjectUsers(projectId);

        if (!users) {
            return
        }
        
        return users
    }
}