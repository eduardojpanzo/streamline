import { Project } from '../model/Project';
import { Task } from '../model/Task';
import {ICheckProjectDTO, ICreateProjectDTO, ISetAdminDTO} from '../types/dto'

export interface IProjectsRepository{
    create:(projectData: ICreateProjectDTO) => Promise<Project>;
    checkIfProjectExist:(checkData:ICheckProjectDTO)=>Promise<Project>;
    delete:(projeectId:string)=>Promise<Project>
    findByName: (name: string) => Promise<Project>;
    findById: (id: string) => Promise<Project>;
    getProjectTasks:(projectId:string)=>Promise<Task[]>
}