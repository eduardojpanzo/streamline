import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureTaskHolder } from "../middlewares/ensureTaskHolder";
import { changeTaskStatusController } from "../useCases/tasks/ChangeTaskStatus";
import { createTasksController } from "../useCases/tasks/CreateTask";
import { deleteTaskController } from "../useCases/tasks/DeleteTask";
import { findTaskFromNameController } from "../useCases/tasks/FindTask";

const tasksRoutes = Router();

tasksRoutes.post("/",ensureAdmin,(req,res)=>{
    return createTasksController.handle(req,res)
})

tasksRoutes.get("/:name",(req,res)=>{
    return findTaskFromNameController.handle(req,res);
})

tasksRoutes.put("/change",ensureTaskHolder,(req,res)=>{
    return changeTaskStatusController.handle(req,res);
})

tasksRoutes.delete("/delete",(req,res)=>{
    return deleteTaskController.handle(req,res);
})

export {tasksRoutes}