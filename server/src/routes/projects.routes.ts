import { Router } from "express";
import { createProjectsController } from "../useCases/projects/CreateProject";
import { findProjectFromNameController } from "../useCases/projects/FindProject";
import { getUserProjectsController } from "../useCases/users/GetUserProjects";

const projectsRoutes = Router();

projectsRoutes.post("/",(req,res)=>{
    return createProjectsController.handle(req,res)
})

projectsRoutes.get("/:name",(req,res)=>{
    return findProjectFromNameController.handle(req,res);
})

projectsRoutes.get("/tasks/:id",(req,res)=>{
    return getUserProjectsController.handle(req,res);
})

export {projectsRoutes}