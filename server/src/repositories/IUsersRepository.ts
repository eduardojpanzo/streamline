import { Project } from '../model/Project';
import { User } from '../model/User';
import {ICreateUserDTO} from '../types/dto'

export interface IUsersRepository{
    findByEmail: (email: string) => Promise<User>;
    findById: (id: string) => Promise<User>;
    getUserProjects:(authorId:string)=>Promise<Project[]>;
    create:({email,name,password}: ICreateUserDTO) => Promise<void>;
}