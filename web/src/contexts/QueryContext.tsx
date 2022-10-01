
import { createContext, ReactNode } from "react"
import { api } from "../services/api";
import { Project, User,Task } from "../types";
import { ICreateProjectDTO, ICreateTaskDTO, IGhangeTaskDTO, UserAuthDTO, UserCreateDTO } from "../types/dto";

type QueryContextType ={
    handleCreateAccount:(userInfo:UserCreateDTO)=>Promise<any>
    handleAutheticate:(user:UserAuthDTO)=>Promise<{token:string,user:User}>
    handleRecoveryUserInformation:(token:string)=>Promise<User>;
    handleGetUserProjects:(authorId:string)=>Promise<Project[]>;
    handleCreateProject:(project:ICreateProjectDTO)=>Promise<void>;
    handleGetProjectTasks:(projectId:string)=>Promise<Task[]>;
    handleChangeTaskStatus:(changeData:IGhangeTaskDTO)=>Promise<Task>;
    handleCreateTask:(reateData:ICreateTaskDTO)=>Promise<any>
}

interface QueryContextProviderProps{
    children:ReactNode;
}


export const QueryContext = createContext({} as QueryContextType);

export function QueryContextProvider({children}:QueryContextProviderProps){
    const handleCreateAccount = async (userInfo:UserCreateDTO)=>{
        const res = await api.post("/users",userInfo);

        if (res.status === 409) {
            throw new Error("User already Exists");
        }        
    }

    const handleAutheticate = async (user:UserAuthDTO)=>{
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

    const handleRecoveryUserInformation =  async(token?:string)=>{
        const res = await api.get("/users");
        const user = await res.data;
        
        if (res.status === 404) {
            throw new Error("User Is not Exists");
        }        

        return user
    }

    const handleGetUserProjects = async (authorId:string)=>{
        const res = await api.get(`/users/projects/${authorId}`);
        const projects = await res.data;        

        return projects;
    }

    const handleCreateProject = async (project:ICreateProjectDTO)=>{
        const res = await api.post("/projects",project);

        if (res.status === 401) {
            throw new Error("Projects already Exists");
        } 
    }

    const handleGetProjectTasks = async (projectId:string)=>{
        const res = await api.get(`projects/tasks/${projectId}`);
        const tasks = await res.data;

        return tasks;
    }

    const handleChangeTaskStatus = async (changeData:IGhangeTaskDTO)=>{
        const res = await api.put(`/tasks/change`,changeData);
        const task = await res.data;

        return task;
    }

    const handleCreateTask = async (createData:ICreateTaskDTO)=>{
        const res = await api.post(`/tasks`,createData);
        const task = await res.data;

        return task;
    }

    return(
        <QueryContext.Provider value={{
            handleCreateAccount,
            handleAutheticate,
            handleRecoveryUserInformation,
            handleGetUserProjects,
            handleCreateProject,
            handleGetProjectTasks,
            handleChangeTaskStatus,
            handleCreateTask
        }}>
            {children}
        </QueryContext.Provider>
    )
}