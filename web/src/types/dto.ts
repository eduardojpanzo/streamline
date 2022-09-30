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

export interface IGhangeTaskDTO {
    taskId:string,
    nextStatus:string
    userId:string
}