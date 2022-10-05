import { Request, Response } from "express";
import { BecomeTaskHolderUseCase} from "./BecomeTaskHolderUseCase";

export class BecomeTaskHolderController {
    constructor (
        private becomeTaskHolderUseCase: BecomeTaskHolderUseCase
    ){}


    async handle(req:Request,res:Response){
        const {userId,email,taskId} = req.body

        try {
            const taskHolderCreated = await this.becomeTaskHolderUseCase.execute({
                userId,
                taskId,
                email
            })

            return res.status(200).json(taskHolderCreated);
            
        } catch (err) {
            return res.status(401).json({ message: err.message || "unexpected error" });
        }
    }
}