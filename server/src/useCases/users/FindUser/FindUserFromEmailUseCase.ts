import { User } from "../../../model/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class FindUserFromEmailUseCase {
    constructor (private usersRepository:IUsersRepository){}

    async execute(email:string):Promise<User>{
        const user = await this.usersRepository.findByEmail(email)
        
        if (!user) {
            throw new Error("user not exists");
        }

        return user;
    }
}