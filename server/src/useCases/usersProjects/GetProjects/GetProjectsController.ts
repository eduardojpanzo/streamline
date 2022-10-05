import { Request, Response } from "express";
import { GetProjectsUseCase } from "./GetProjectsUseCase";

export class GetProjectsController{
    constructor(private getProjectsUseCase:GetProjectsUseCase){}

    async handle(req:Request,res:Response) {
        const {userId} = req.params;
        try{
            const projects = await this.getProjectsUseCase.execute(userId);
            
            return res.status(200).json(projects);
            
        }catch(err) {
            return res.status(404).json({ message: err.message || "projects not found"});
        }
    }
}