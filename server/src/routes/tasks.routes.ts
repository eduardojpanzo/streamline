import { Router } from "express";
import { createTasksController } from "../useCases/tasks/CreateTask";
import { findTaskFromNameController } from "../useCases/tasks/FindTask";

const tasksRoutes = Router();

tasksRoutes.post("/",(req,res)=>{
    return createTasksController.handle(req,res)
})

tasksRoutes.get("/:name",(req,res)=>{
    return findTaskFromNameController.handle(req,res);
})

export {tasksRoutes}