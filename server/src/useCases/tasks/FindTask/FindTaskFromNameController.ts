import { Request, Response } from "express";
import { FindTaskFromNameUseCase } from "./FindTaskFromNameUseCase";

export class FindTaskFromNameController{
    constructor(private findTaskFromNameUseCase:FindTaskFromNameUseCase){}
    
    async handle (req:Request,res:Response){
        const {name} = req.params;

        try {
            const task = await this.findTaskFromNameUseCase.execute(name);
            return res.status(200).send(task);

          } catch (err) {
            return res.status(401)
                    .json({ message: err.message || "Task not found"});
          }
    }
}