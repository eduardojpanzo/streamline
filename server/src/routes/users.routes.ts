import { Router } from "express";
import { createUsersController } from "../useCases/users/CreateUser";
import { findUserFromEmailController } from "../useCases/users/FindUser";

const usersRoutes = Router();

usersRoutes.post("/",(req,res)=>{
    return createUsersController.handle(req,res)
})

usersRoutes.get("/:email",(req,res)=>{
    return findUserFromEmailController.handle(req,res);
})

export {usersRoutes}