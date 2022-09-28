export interface ICreateUserDTO {
    email: string;
    name: string;
    password: string;
}

export interface IGetUserDTO {
    id:string;
    email: string;
    name: string;
    avatar_img:string;
}

export interface ICreateProjectDTO {
    name:string
    description:string
    authorId: string
    color:string
    created_at?:Date
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
    created_at?:Date
}
export interface IAuthenticateUserDTO {
    email:string
    password:string
}

export interface IGhangeTaskDTO {
    taskId:string,
    nextStatus:any
}