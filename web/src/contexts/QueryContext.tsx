
import { createContext, ReactNode } from "react"
import { api } from "../service/api";
import { Project, User } from "../types";
import { ICreateProjectDTO, UserAuthDTO, UserCreateDTO } from "../types/dto";

type QueryContextType ={
    createAccount:(userInfo:UserCreateDTO)=>Promise<any>
    autheticate:(user:UserAuthDTO)=>Promise<{token:string,user:User}>
    recoverUserInformation:(token:string)=>Promise<User>;
    getUserProjects:(authorId:string)=>Promise<Project[]>;
    createProject:(project:ICreateProjectDTO)=>Promise<void>;
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
        
        return {
            token:res.data.token,
            user:res.data.user
        }
    }

    const recoverUserInformation =  async(token:string)=>{
        //from this token search a user belong
        const user = {
            id: "d5c238ea-cb7b-4f69-9ef2-d1fe6f9bb1a1",
            email: "johne@gmail.com",
            name: "Paulino Passil",
            avatar_img: 'null'
        }

        return user
    }

    const getUserProjects = async (authorId:string)=>{
        const res = await api.get(`/users/projects/${authorId}`);

        const projects = await res.data;

        console.log(projects);
        

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

        console.log(tasks);
        

        return tasks;
    }

    return(
        <QueryContext.Provider value={{
            createAccount,
            autheticate,
            recoverUserInformation,
            getUserProjects,
            createProject
        }}>
            {children}
        </QueryContext.Provider>
    )
}