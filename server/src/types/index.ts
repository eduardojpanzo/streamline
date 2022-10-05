import { Project } from "../model/Project"
import { Task } from "../model/Task"
import { User } from "../model/User"


export type UserProjects = {
    adminProjects:Project[],
    othersProjects:Project[]
}

export type ProjectUsers = {
    admins:User[],
    members:User[]
}

export type ProjectInfo = {
    project:Project,
    users:ProjectUsers,
    tasks:Task[]
}

export type PublicUserInfo = Omit<User, "password">