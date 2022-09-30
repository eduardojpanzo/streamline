import { NextFunction, Request, Response } from "express";
import { UsersProjectsRepository } from "../repositories/Implementations/UsersProjectsRepository";

 export async function ensureAdmin(request:Request,response:Response,next:NextFunction) {
    const {userId,projectId} = request.body;

    try {
        const usersProjectsRepository = new UsersProjectsRepository();
        const isAdmin = await usersProjectsRepository.checkIfIsAdminProject({
            userId,
            projectId
        })

        if (!isAdmin) {
            throw new Error("Not Permitted, Only Admin can do");
        }
        
        next();
    } catch (err) {
        return response
            .status(401)
            .json({ message: err.message || "unexpected error" });
    }

 }