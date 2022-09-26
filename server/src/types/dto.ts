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
    created_at?:Date
}

export interface ICreateTaskDTO {
    name:string
    description:string
    status:string
    projectId: string
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