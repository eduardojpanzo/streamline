import { Request, Response } from "express";
import { CreateTasksUseCase } from "./CreateTasksUseCase";

export class CreateTasksController {
    constructor(private createTasksUseCase: CreateTasksUseCase) {}

    async handle(req:Request, res:Response){
        const {name,description,status,projectId} = req.body;

        try {
            await this.createTasksUseCase.execute({
                name,
                description,
                projectId,
                status
            })
            
            return res.status(200).send();

        } catch (err) {
            return res.status(400)
                    .json({ message: err.message || "unexpected error" });
        }
    }
}