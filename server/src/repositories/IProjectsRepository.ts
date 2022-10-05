import { Project } from '../model/Project';
import { Task } from '../model/Task';
import { ProjectInfo } from '../types';
import {ICheckProjectDTO, ICreateProjectDTO, ISetAdminDTO} from '../types/dto'

export interface IProjectsRepository{
    create:(projectData: ICreateProjectDTO) => Promise<Project>;
    checkIfProjectExist:(checkData:ICheckProjectDTO)=>Promise<Project>;
    delete:(projeectId:string)=>Promise<Project>
    findByName: (name: string) => Promise<Project>;
    findById: (id: string) => Promise<ProjectInfo>;
    getProjectTasks:(projectId:string)=>Promise<Task[]>
}