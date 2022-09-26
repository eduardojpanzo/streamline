
import { createContext, ReactNode } from "react"
import { api } from "../service/api";
import { Project, User,Task } from "../types";
import { ICreateProjectDTO, IGhangeTaskDTO, UserAuthDTO, UserCreateDTO } from "../types/dto";

type QueryContextType ={
    createAccount:(userInfo:UserCreateDTO)=>Promise<any>
    autheticate:(user:UserAuthDTO)=>Promise<{token:string,user:User}>
    recoveryUserInformation:(token:string)=>Promise<User>;
    getUserProjects:(authorId:string)=>Promise<Project[]>;
    createProject:(project:ICreateProjectDTO)=>Promise<void>;
    getProjectTasks:(projectId:string)=>Promise<Task[]>;
    changeTaskStatus:(changeData:IGhangeTaskDTO)=>Promise<Task>;
}

interface QueryContextProviderProps{
    children:ReactNode;
}


export const QueryContext = createContext({} as QueryContextType);

export function QueryContextProvider({children}:QueryContextProviderProps){
    const createAccount = async (userInfo:UserCreateDTO)=>{
        const res = await api.post("/users",userInfo);

        if (res.status === 409) {
            throw new Error("User already Exists");
        }        
    }

    const autheticate = async (user:UserAuthDTO)=>{
        const res = await api.post("/users/auth",user);

        if (res.status === 404) {
            throw new Error("User already Exists");
        }
        
        console.log(res.data);
        
        return {
            token:res.data.token,
            user:res.data.user
        }
    }

    const recoveryUserInformation =  async(token?:string)=>{
        const res = await api.get("/users");
        const user = await res.data;
        
        if (res.status === 404) {
            throw new Error("User Is not Exists");
        }        

        return user
    }

    const getUserProjects = async (authorId:string)=>{
        const res = await api.get(`/users/projects/${authorId}`);
        const projects = await res.data;        

        return projects;
    }

    const createProject = async (project:ICreateProjectDTO)=>{
        const res = await api.post("/projects",project);

        if (res.status === 401) {
            throw new Error("Projects already Exists");
        } 
    }

    const getProjectTasks = async (projectId:string)=>{
        const res = await api.get(`projects/tasks/${projectId}`);
        const tasks = await res.data;

        return tasks;
    }

    const changeTaskStatus = async ({taskId,nextStatus}:IGhangeTaskDTO)=>{
        const res = await api.put(`/tasks/change`,{taskId,nextStatus});
        const task = await res.data;

        return task;
    }

    return(
        <QueryContext.Provider value={{
            createAccount,
            autheticate,
            recoveryUserInformation,
            getUserProjects,
            createProject,
            getProjectTasks,
            changeTaskStatus
        }}>
            {children}
        </QueryContext.Provider>
    )
}