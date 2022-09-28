import { NextFunction, Request, Response } from "express";
import { UsersTasksRepository } from "../repositories/Implementations/UsersTasksRepository";

 export async function ensureTaskHolder(request:Request,response:Response,next:NextFunction) {
    const {userId,taskId} = request.body;

    try {
        const usersTasksRepository = new UsersTasksRepository()
        const isTaskHolder = await usersTasksRepository.checkIfIsTaskHolder({
            userId,
            taskId
        })

        if (!isTaskHolder) {
            throw new Error("Not Permitted, Only Task of Holder can do that");
        }
        
        next();
    } catch (err) {
        return response
            .status(401)
            .json({ message: err.message || "unexpected error" });
    }
 }