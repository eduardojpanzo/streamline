import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { createProjectsController } from "../useCases/projects/CreateProject";
import { deleteProjectController } from "../useCases/projects/DeleteProject";
import { findProjectFromIdController } from "../useCases/projects/FindProject";
import { getProjectTasksController } from "../useCases/projects/GetProjectTasks";

const projectsRoutes = Router();

projectsRoutes.post("/",(req,res)=>{
    return createProjectsController.handle(req,res)
})

projectsRoutes.get("/:projectId",(req,res)=>{
    return findProjectFromIdController.handle(req,res);
})

projectsRoutes.get("/tasks/:projectId",(req,res)=>{
    return getProjectTasksController.handle(req,res);
})

projectsRoutes.delete("/delete",ensureAdmin,(req,res)=>{
    return deleteProjectController.handle(req,res);
})

export {projectsRoutes}