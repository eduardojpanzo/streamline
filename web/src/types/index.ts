export type ListType = {
    title: string;
    creatable: boolean;
    cards:CardType[];
    done?:boolean
}

export type CardType = {
    id: number;
    content: string;
    labels: string[];
    user: string;
}

export interface Project {
    id:string,
    name:string,
    description:string,
    authorId: string,
    created_at?:Date
}

export type User = {
    id:string,
    email:string,
    name:string,
    avatar_img:string
}

export type Task = {
    id:string,
    name:string,
    description:string,
    status:string,
    projectId: string,
    created_at?:Date
}

export type ProjectDataType = {
    tasks:Task[],
  }