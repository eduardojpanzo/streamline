import { Task} from '../model/Task';
import {ICreateTaskDTO} from '../types/dto'

export interface ITasksRepository{
    findById: (id: string) => Promise<Task>;
    findByName: (name: string) => Promise<Task>;
    /*listAllTasks:() => Promise<Task[]>; */
    create:({name,description,status,projectId}: ICreateTaskDTO) => Promise<void>;
}