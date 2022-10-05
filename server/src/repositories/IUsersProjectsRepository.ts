import { UserProject } from '../model/UserProject'
import { ProjectUsers, UserProjects } from '../types';
import {IMemberProjectDTO, ISetAdminDTO} from '../types/dto'

export interface IUsersProjectsRepository{
    setProjectAdmin:(setData:ISetAdminDTO) => Promise<UserProject>;
    setProjectMember:(setData:IMemberProjectDTO) => Promise<UserProject>;
    
    checkIfIsAdminProject: (checkData:ISetAdminDTO)=>Promise<UserProject>
    checkIfIsProjectMember: (checkData:ISetAdminDTO)=>Promise<UserProject>

    getUserProjects:(userId:string)=>Promise<UserProjects>
    getProjectUsers:(projectId:string)=>Promise<ProjectUsers>
}