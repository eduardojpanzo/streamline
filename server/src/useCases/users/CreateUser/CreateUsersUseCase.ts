import { User } from "../../../model/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../types/dto";

export class CreateUsersUseCase {
    constructor (private usersRepository:IUsersRepository){}

    async execute({email,name, password}:ICreateUserDTO):Promise<User>{

        const userAlreadyExists = await this.usersRepository.findByEmail(email)
        
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        
        const user =  await this.usersRepository.create({
            email,
            name,
            password
        })

        return user
    }
}