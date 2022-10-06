import { Project } from '../model/Project';
import { User } from '../model/User';
import { UserInfo } from '../types';
import {ICreateUserDTO} from '../types/dto'

export interface IUsersRepository{
    create:(userData: ICreateUserDTO) => Promise<User>;
    getUser: (email: string) => Promise<UserInfo>;

    findByEmail: (email: string) => Promise<User>;
    findById: (id: string) => Promise<User>;
    
    getUserProjects:(authorId:string)=>Promise<Project[]>;
}