import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

export class CreateUsersController {
    constructor(private createUserUseCase: CreateUsersUseCase) {}

    async handle(req:Request, res:Response){
        const {email,name,password} = req.body;

        try {
            await this.createUserUseCase.execute({email,name,password})
            return res.status(200).send();

        } catch (err) {
            return res.status(409).json({ message: err.message || "unexpected error" });
        }
    }
}