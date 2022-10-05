export type UserCreateDTO = {
    email:string;
    name:string;
    password:string;
    confirmPassword?:string;
}

export type UserAuthDTO = {
    email:string;
    password:string;
}

export interface ICreateProjectDTO {
    name:string
    description:string
    color:string
    authorId: string
    createdAt?:Date
}

export interface ICreateTaskDTO {
    userId:string
    name:string
    description:string
    status:string
    color:string
    projectId: string
    createdAt?:Date
}

export interface IGhangeTaskDTO {
    taskId:string,
    nextStatus:string
    userId:string
}