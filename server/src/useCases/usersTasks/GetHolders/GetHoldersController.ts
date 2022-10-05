import { Request, Response } from "express";
import { GetHoldersUseCase } from "./GetHoldersUseCase";

export class GetHoldersController{
    constructor(private getHoldersUseCase:GetHoldersUseCase){}

    async handle(req:Request,res:Response) {
        const {taskId} = req.params;
        try{
            const holders = await this.getHoldersUseCase.execute(taskId);
            
            return res.status(200).json(holders);
            
        }catch(err) {
            return res.status(404).json({ message: err.message || "holders not found"});
        }
    }
}