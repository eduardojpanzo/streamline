import { Request, Response } from "express";
import { GetUserProjectsUseCase } from "./GetUserProjectsUseCase";

export class GetUserProjectsController{
    constructor(private getUserProjectsUseCase:GetUserProjectsUseCase){}

    async handle(req:Request,res:Response) {
        const {authorId} = req.params;

        try{
            const projects = await this.getUserProjectsUseCase.execute(authorId);
            return res.status(200).send(projects);

        }catch(err) {
            return res.status(401).json({ message: err.message || "projects not found"});
        }
    }
}