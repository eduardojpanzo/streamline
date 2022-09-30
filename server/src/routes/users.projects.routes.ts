import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureUserExist } from "../middlewares/ensureUserExist";
import { becomeAdminController } from "../useCases/usersProjects/BecomeAdmin";
import { becomeMemberController } from "../useCases/usersProjects/BecomeMember";

const usersProjectsRoutes = Router();

usersProjectsRoutes
    .post("/admin",ensureAdmin,ensureUserExist,(req,res)=>{
    return becomeAdminController.handle(req,res);
})

usersProjectsRoutes
    .post("/member",ensureAdmin,ensureUserExist,(req,res)=>{
    return becomeMemberController.handle(req,res);
})
export {usersProjectsRoutes}