import { UserTask } from '../model/UserTask';
import { ISetHolderDTO } from '../types/dto'

export interface IUsersTasksRepository{
    setTaskHolder:(setData:ISetHolderDTO) => Promise<UserTask>;
    checkIfIsTaskHolder:(checkData: ISetHolderDTO)=>Promise<UserTask>
}