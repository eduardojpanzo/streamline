import { Request, Response } from "express";
import { GetTasksUseCase } from "./GetTasksUseCase";

export class GetTasksController{
    constructor(private getTasksUseCase:GetTasksUseCase){}

    async handle(req:Request,res:Response) {
        const {userId} = req.params;
        try{
            const tasks = await this.getTasksUseCase.execute(userId);
            
            return res.status(200).json(tasks);
            
        }catch(err) {
            return res.status(404).json({ message: err.message || "tasks not found"});
        }
    }
}