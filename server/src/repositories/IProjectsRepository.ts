import { Project } from '../model/Project';
import { Task } from '../model/Task';
import {ICreateProjectDTO} from '../types/dto'

export interface IProjectsRepository{
    findByName: (name: string) => Promise<Project>;
    findById: (id: string) => Promise<Project>;
    getProjectTasks:(projectId:string)=>Promise<Task[]>
    
    create:({name,description,created_at}: ICreateProjectDTO) => Promise<void>;
}