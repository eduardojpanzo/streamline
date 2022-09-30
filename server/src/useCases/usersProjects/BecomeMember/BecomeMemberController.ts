import { Request, Response } from "express";
import { BecomeMemberUseCase } from "./BecomeMemberUseCase";


export class BecomeMemberController {
    constructor (
        private becomeMemberUseCase: BecomeMemberUseCase
    ){}


    async handle(req:Request,res:Response){
        const {userId,projectId,id} = req.body

        try {
            const newMembercreated = await this.becomeMemberUseCase.execute({
                userId,
                projectId,
                id
            })

            return res.status(200).json(newMembercreated);
            
        } catch (err) {
            return res.status(401).json({ message: err.message || "unexpected error" });
        }
    }
}