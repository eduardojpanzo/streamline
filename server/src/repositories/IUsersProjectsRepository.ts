import { UserProject } from '../model/UserProject'
import {IMemberProjectDTO, ISetAdminDTO} from '../types/dto'

export interface IUsersProjectsRepository{
    setProjectAdmin:(setData:ISetAdminDTO) => Promise<UserProject>;
    checkIfIsAdminProject: (checkData:ISetAdminDTO)=>Promise<UserProject>

    setProjectMember:(setData:IMemberProjectDTO) => Promise<UserProject>;
    checkIfIsProjectMember: (checkData:ISetAdminDTO)=>Promise<UserProject>

}