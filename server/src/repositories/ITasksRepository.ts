import { Task} from '../model/Task';
import {ICreateTaskDTO, IGhangeTaskDTO} from '../types/dto'

export interface ITasksRepository{
    create: (taskData: ICreateTaskDTO) => Promise<Task>;
    findById: (id: string) => Promise<Task>;
    findByName: (name: string) => Promise<Task>;
    changeTaskStatus:(changeData:IGhangeTaskDTO)=>Promise<Task>
}