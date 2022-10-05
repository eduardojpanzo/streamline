import { Request, Response } from "express";
import { FindProjectFromIdUseCase } from "./FindProjectFromIdUseCase";

export class FindProjectFromIdController{
    constructor(private findProjectFromIdUseCase:FindProjectFromIdUseCase){}
    
    async handle (req:Request,res:Response){
        const {projectId} = req.params;

        try {
            const project = await this.findProjectFromIdUseCase.execute(projectId);
            return res.status(200).send(project);

          } catch (err) {
            return res.status(401)
                    .json({ message: err.message || "Project not found"});
          }
    }
}