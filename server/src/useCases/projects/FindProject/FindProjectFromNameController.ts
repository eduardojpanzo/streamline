import { Request, Response } from "express";
import { FindProjectFromNameUseCase } from "./FindProjectFromNameUseCase";

export class FindProjectFromNameController{
    constructor(private findProjectFromNameUseCase:FindProjectFromNameUseCase){}
    
    async handle (req:Request,res:Response){
        const {name} = req.params;

        try {
            const project = await this.findProjectFromNameUseCase.execute(name);
            return res.status(200).send(project);

          } catch (err) {
            return res.status(401)
                    .json({ message: err.message || "Project not found"});
          }
    }
}