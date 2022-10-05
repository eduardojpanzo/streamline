import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

export class GetUsersController{
    constructor(private getUsersUseCase:GetUsersUseCase){}

    async handle(req:Request,res:Response) {
        const {projectId} = req.params;
        try{
            const users = await this.getUsersUseCase.execute(projectId);
            
            return res.status(200).json(users);
            
        }catch(err) {
            return res.status(404).json({ message: err.message || "not found"});
        }
    }
}