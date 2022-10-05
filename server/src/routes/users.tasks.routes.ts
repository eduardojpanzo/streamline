import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureUserExist } from "../middlewares/ensureUserExist";
import { becomeTaskHolderController } from "../useCases/usersTasks/BecomeHolderTask";
import { getHoldersController } from "../useCases/usersTasks/GetHolders";
import { getTasksController } from "../useCases/usersTasks/GetTasks";

const usersTasksRoutes = Router();

usersTasksRoutes
    .post("/holder",ensureAdmin,ensureUserExist,(req, res)=>{
        return becomeTaskHolderController.handle(req,res);

})

usersTasksRoutes.get("/tasks/:userId",(req,res)=>{
    return getTasksController.handle(req,res);
})

usersTasksRoutes.get("/holders/:taskId",(req,res)=>{
    return getHoldersController.handle(req,res);
})

export { usersTasksRoutes}