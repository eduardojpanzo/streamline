import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    constructor(private authenticateUserUseCase:AuthenticateUserUseCase){}
    async handle(req:Request,res:Response){
        const {email, password} = req.body;

        try {
            const user_token = await this.authenticateUserUseCase.execute({
                email,
                password
            })
            return res.status(201).json(user_token);

        } catch (err) {
            return res.status(404).send(err);
        }


    }
}