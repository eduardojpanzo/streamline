import { Request, Response } from "express";
import { GetProjectTasksUseCase } from "./GetProjectTasksUseCase";

export class GetProjectTasksController{
    constructor(private getProjectTasksUseCase:GetProjectTasksUseCase){}

    async handle(req:Request,res:Response) {
        const {projectId} = req.params;

        try{
            const tasks = await this.getProjectTasksUseCase.execute(projectId);
            return res.status(200).send(tasks);

        }catch(err) {
            return res.status(401).json({ message: err.message || "projects not found"});
        }
    }
}