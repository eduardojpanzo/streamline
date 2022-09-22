import { User } from '../model/User';
import {ICreateUserDTO} from '../types/dto'

export interface IUsersRepository{
    findByEmail: (email: string) => Promise<User>;
    findById: (id: string) => Promise<User>;
    create:({email,name,password}: ICreateUserDTO) => Promise<void>;
}