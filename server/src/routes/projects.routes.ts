import { Router } from "express";
import { createProjectsController } from "../useCases/projects/CreateProject";
import { findProjectFromNameController } from "../useCases/projects/FindProject";

const projectsRoutes = Router();

projectsRoutes.post("/",(req,res)=>{
    return createProjectsController.handle(req,res)
})

projectsRoutes.get("/:name",(req,res)=>{
    return findProjectFromNameController.handle(req,res);
})

export {projectsRoutes}