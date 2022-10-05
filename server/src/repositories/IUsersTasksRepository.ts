import { Task } from '../model/Task';
import { User } from '../model/User';
import { UserTask } from '../model/UserTask';
import { ISetHolderDTO } from '../types/dto'

export interface IUsersTasksRepository{
    setTaskHolder:(setData:ISetHolderDTO) => Promise<UserTask>;
    checkIfIsTaskHolder:(checkData: ISetHolderDTO)=>Promise<UserTask>

    getUserTasks:(userId:string)=>Promise<Task[]>
    getTasksHolders:(taskId:string)=>Promise<User[]>
}