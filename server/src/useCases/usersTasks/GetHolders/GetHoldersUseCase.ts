import { User } from "../../../model/User";
import { IUsersTasksRepository } from "../../../repositories/IUsersTasksRepository";

export class GetHoldersUseCase {
    constructor(private usersTasksRepository: IUsersTasksRepository){}

    async execute(taskId:string):Promise<User[]>{
        const holders = await this.usersTasksRepository.getTasksHolders(taskId);

        if (!holders) {
            return
        }
        
        return holders
    }
}