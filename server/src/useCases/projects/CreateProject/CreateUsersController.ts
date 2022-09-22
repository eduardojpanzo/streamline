import { Request, Response } from "express";
import { CreateProjectsUseCase } from "./CreateUsersUseCase";

export class CreateProjectsController {
    constructor(private createProjectsUseCase: CreateProjectsUseCase) {}

    async handle(req:Request, res:Response){
        const {name,description,authorId} = req.body;

        try {
            await this.createProjectsUseCase.execute({
                name,
                description,
                authorId
            })
            
            return res.status(200).send();

        } catch (err) {
            return res.status(400)
                    .json({ message: err.message || "unexpected error" });
        }
    }
}