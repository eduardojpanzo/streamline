import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureUserExist } from "../middlewares/ensureUserExist";
import { becomeAdminController } from "../useCases/usersProjects/BecomeAdmin";
import { becomeMemberController } from "../useCases/usersProjects/BecomeMember";
import { getProjectsController } from "../useCases/usersProjects/GetProjects";
import { getUsersController } from "../useCases/usersProjects/GetUsers";

const usersProjectsRoutes = Router();

usersProjectsRoutes
    .post("/admin",ensureAdmin,ensureUserExist,(req,res)=>{
    return becomeAdminController.handle(req,res);
})

usersProjectsRoutes
    .post("/member",ensureAdmin,ensureUserExist,(req,res)=>{
    return becomeMemberController.handle(req,res);
})

usersProjectsRoutes.get("/projects/:userId",(req,res)=>{
    return getProjectsController.handle(req,res);
})

usersProjectsRoutes.get("/users/:projectId",(req,res)=>{
    return getUsersController.handle(req,res);
})

export {usersProjectsRoutes}