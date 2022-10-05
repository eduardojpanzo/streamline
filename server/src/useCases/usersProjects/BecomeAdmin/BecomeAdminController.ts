import { NextFunction, Request, Response } from "express";
import { BecomeAdminUseCase } from "./BecomeAdminUseCase";


export class BecomeAdminController {
    constructor (
        private becomeAdminUseCase: BecomeAdminUseCase
    ){}


    async handle(req:Request,res:Response){
        const {userId,email,projectId} = req.body

        try {
            const newAdmincreated = await this.becomeAdminUseCase.execute({
                userId,
                projectId,
                email
            })

            return res.status(200).json(newAdmincreated);
            
        } catch (err) {
            return res.status(401).json({ message: err.message || "unexpected error" });
        }
    }
}