import { Task} from '../model/Task';
import {ICheckTaskDTO, ICreateTaskDTO, IGhangeTaskDTO} from '../types/dto'

export interface ITasksRepository{
    create: (taskData: ICreateTaskDTO) => Promise<Task>;
    checkIfTheTaskAlreadyExists:(checkData:ICheckTaskDTO)=>Promise<Task>;
    delete:(taskId:string)=>Promise<Task>
    findById: (id: string) => Promise<Task>;
    findByName: (name: string) => Promise<Task>;
    changeTaskStatus:(changeData:IGhangeTaskDTO)=>Promise<Task>
}