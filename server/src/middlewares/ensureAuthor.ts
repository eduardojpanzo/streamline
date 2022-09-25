import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../repositories/Implementations/UsersRepository";

 export async function ensureAuthor(request:Request,response:Response,next:NextFunction) {
    const {user} = request;

    const usersRepositories = new UsersRepository();
    
    /* const {} = await usersRepositories.findById(user.id);

    if (admin) {
        return next();
    } */

    return response.status(401).json({
        error:"Unauthorized",
    })
 }