import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureUserExist } from "../middlewares/ensureUserExist";
import { becomeTaskHolderController } from "../useCases/usersTasks/BecomeHolderTask";

const usersTasksRoutes = Router();

usersTasksRoutes
    .post("/holder",ensureAdmin,ensureUserExist,(req, res)=>{
        return becomeTaskHolderController.handle(req,res);

})

export { usersTasksRoutes}