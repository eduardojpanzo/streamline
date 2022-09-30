import { NextFunction, Request, Response } from "express";
import { UsersProjectsRepository } from "../repositories/Implementations/UsersProjectsRepository";

 export async function ensureProjectMember(request:Request,response:Response,next:NextFunction) {
   const {userId,projectId} = request.body;

    try {
        const usersProjectsRepository = new UsersProjectsRepository();
        const isProjectMember = await usersProjectsRepository.checkIfIsProjectMember({
            userId,
            projectId
        })

        if (!isProjectMember) {
            throw new Error("Not Permitted, Only Member of project can do");
        }
        
        next();
    } catch (err) {
        return response
            .status(401)
            .json({ message: err.message || "unexpected error" });
    }
    
 }