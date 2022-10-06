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
    color:string;
    authorId: string,
    createdAt?:Date
}

export interface Projects{
    adminProjects:Project[],
    othersProjects:Project[]
}

export type UserType = {
    id:string,
    email:string,
    name:string,
    avatarImg:string
}

export type UserInfo = {
    id:string;
    email: string;
    name: string;
    password?: string;
    avatarImg: string;
    projects:Projects,
    tasks:Task[]
}

export type ProjectUsers = {
    admins:UserType[],
    members:UserType[]
}

export type ProjectInfo = {
    project:Project,
    users:ProjectUsers,
    tasks:Task[]
}

export type Task = {
    id:string,
    name:string,
    description:string,
    color:string,
    status:string,
    projectId: string,
    createdAt?:Date
}

export type ProjectDataType = {
    tasks:Task[],
  }

export type DragItemtype = {
    id:string,
    index:number,
    list:string
}