export interface ICreateUserDTO {
    email: string;
    name: string;
    password: string;
}

export interface IGetUserDTO {
    id:string;
    email: string;
    name: string;
    avatarImg:string;
}

export interface ICreateProjectDTO {
    name:string
    description:string
    authorId: string
    color:string
    createdAt?:Date
}

export interface ICheckProjectDTO{
    name:string,
    authorId:string,
}

export interface ISetAdminDTO {
    userId:string
    projectId:string
}

export interface ISetHolderDTO {
    userId:string
    taskId:string
}

export interface IMemberProjectDTO {
    userId:string
    projectId:string
}

export interface ICreateTaskDTO {
    name:string
    description:string
    status:string
    color:string,
    projectId: string,
    userId?: string,
    createdAt?:Date
}
export interface IAuthenticateUserDTO {
    email:string
    password:string
}

export interface ICheckTaskDTO{
    name:string,
    projectId:string
}

export interface IGhangeTaskDTO {
    taskId:string,
    nextStatus:any
}

export interface IBecomeAdminDTO {
    userId: string,
    id:string,
    projectId:string,
}

export interface IBecomeMemberDTO {
    userId: string,
    id:string,
    projectId:string,
}

export interface IBecomeTaskHolderDTO {
    userId: string,
    id:string,
    taskId:string,
}