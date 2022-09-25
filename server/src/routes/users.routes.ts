import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { authenticateUserController } from "../useCases/users/Authentication";
import { createUsersController } from "../useCases/users/CreateUser";
import { findUserFromEmailController } from "../useCases/users/FindUser";
import { getUserProjectsController } from "../useCases/users/GetUserProjects";

const usersRoutes = Router();

usersRoutes.post("/",(req,res)=>{
    return createUsersController.handle(req,res)
})

usersRoutes.post("/auth",(req,res)=>{
    return authenticateUserController.handle(req,res)
})

usersRoutes.use(ensureAuthenticated);

usersRoutes.get("/:email",(req,res)=>{
    return findUserFromEmailController.handle(req,res);
})

usersRoutes.get("/projects/:id",(req,res)=>{
    return getUserProjectsController.handle(req,res);
})



export {usersRoutes}