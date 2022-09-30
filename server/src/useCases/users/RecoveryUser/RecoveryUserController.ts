import { RecoveryUserUseCase } from "./RecoveryUserUseCase";
import jwt from "jsonwebtoken";
import {Request,Response} from 'express'

type JwtPayloadProps = {
    id: string;
};

export class RecoveryUserController {
    constructor(
        private recoveryUserUseCase: RecoveryUserUseCase
    ){}

    async handle(req:Request,res:Response) {
        const { authorization } = req.headers;
        
        if (!authorization) {
            return res.status(401).json({ message: "unauthorized" });
        }

        const token = authorization.replace("Bearer", "").trim();
        const { id } = jwt.verify(token, "4f93ac9d10cb751b8c9c646bc9dbccb9") as JwtPayloadProps;

        try{
            const user = await this.recoveryUserUseCase.execute(id);
            return res.status(200).send(user);
        }catch(err) {
            return res.status(401).json(err);
        }
    }
}