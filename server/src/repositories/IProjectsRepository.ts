import { Project } from '../model/Project';
import {ICreateProjectDTO} from '../types/dto'

export interface IProjectsRepository{
    findByName: (name: string) => Promise<Project>;
    
    /*listAllProjects:() => Promise<Project[]>; */
    
    create:({name,description,created_at}: ICreateProjectDTO) => Promise<void>;
}