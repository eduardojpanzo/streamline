import { createContext, ReactNode, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useHandleQuery } from "../hooks/useHandleQueryUser";
import { api } from "../services/api";
import { Task } from "../types";
import { IGhangeTaskDTO } from "../types/dto";

interface BoardContextProviderProps{
    children:ReactNode
}

type BoardContextTypes = {
    changeTaskStatus:(changeData:IGhangeTaskDTO)=>Promise<Task>
    isFetching:boolean
    data: Task[] | undefined
    projectId:string | undefined
}

export const BoardContext = createContext<BoardContextTypes>({} as BoardContextTypes)

export function BoardContextProvider({children}:BoardContextProviderProps) {
    const {projectId} = useParams();
    const {handleGetProjectTasks} = useHandleQuery();

    const {data,isFetching} = useQuery('projectData',async ()=>{
        const tasks = await handleGetProjectTasks(projectId!);
        return tasks;
    })

    const changeTaskStatus = async (changeData:IGhangeTaskDTO)=>{
        const res = await api.put(`/tasks/change`,changeData);
        const task = await res.data;

        return task;
    }

    return ( 
        <BoardContext.Provider value={{changeTaskStatus,data, isFetching,projectId}}>
            {children}
        </BoardContext.Provider>
     );
}