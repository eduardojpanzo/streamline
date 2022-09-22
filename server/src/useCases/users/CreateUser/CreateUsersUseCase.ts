import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../types/dto";

export class CreateUsersUseCase {
    constructor (private usersRepository:IUsersRepository){}

    async execute({email,name, password}:ICreateUserDTO):Promise<void>{

        const userAlreadyExists = await this.usersRepository.findByEmail(email)
        
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        
        await this.usersRepository.create({
            email,
            name,
            password
        })
    }
}