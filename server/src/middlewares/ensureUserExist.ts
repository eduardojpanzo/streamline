import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../repositories/Implementations/UsersRepository";

 export async function ensureUserExist(request:Request,response:Response,next:NextFunction) {
    const {email} = request.body;

    try {
        const usersRepository = new UsersRepository();
        const accountExist = await usersRepository.findByEmail(email)

        if (!accountExist) {
            throw new Error("Not Permitted, This user not exist");
        }
        
        next();
    } catch (err) {
        return response
            .status(401)
            .json({ message: err.message || "unexpected error" });
    }

 }