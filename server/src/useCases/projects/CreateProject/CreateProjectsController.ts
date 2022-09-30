import { Request, Response } from "express";
import { CreateProjectsUseCase } from "./CreateProjectsUseCase";

export class CreateProjectsController {
    constructor(private createProjectsUseCase: CreateProjectsUseCase) {}

    async handle(req:Request, res:Response){
        const {name,description,authorId,color} = req.body;

        try {
            await this.createProjectsUseCase.execute({
                name,
                description,
                authorId,
                color
            })
            
            return res.status(200).send();

        } catch (err) {
            return res.status(401)
                    .json({ message: err.message || "unexpected error" });
        }
    }
}