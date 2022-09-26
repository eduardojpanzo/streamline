import { Router } from "express";
import { changeTaskStatusController } from "../useCases/tasks/ChangeTaskStatus";
import { createTasksController } from "../useCases/tasks/CreateTask";
import { findTaskFromNameController } from "../useCases/tasks/FindTask";

const tasksRoutes = Router();

tasksRoutes.post("/",(req,res)=>{
    return createTasksController.handle(req,res)
})

tasksRoutes.get("/:name",(req,res)=>{
    return findTaskFromNameController.handle(req,res);
})

tasksRoutes.put("/change",(req,res)=>{
    return changeTaskStatusController.handle(req,res);
})

export {tasksRoutes}