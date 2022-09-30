import { Request, Response } from "express";
import { FindUserFromEmailUseCase } from "./FindUserFromEmailUseCase";

export class FindUserFromEmailController{
    constructor(private findUserFromEmailUseCase:FindUserFromEmailUseCase){}
    
    async handle (req:Request,res:Response){
        const {email} = req.params;

        
        try {
            const user = await this.findUserFromEmailUseCase.execute(email);
            return res.status(200).send(user);

          } catch (err) {

            return res.status(401).json({ message: err.message || "User not found"});
          }
    }
}