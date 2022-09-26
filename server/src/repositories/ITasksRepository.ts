import { Task} from '../model/Task';
import {ICreateTaskDTO, IGhangeTaskDTO} from '../types/dto'

export interface ITasksRepository{
    findById: (id: string) => Promise<Task>;
    findByName: (name: string) => Promise<Task>;
    create: (taskData: ICreateTaskDTO) => Promise<void>;
    changeTaskStatus:(changeData:IGhangeTaskDTO)=>Promise<Task>
}