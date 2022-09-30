import {Request, Response} from 'express'

import { ChangeTaskStatusUseCase } from "./ChangeTaskStatusUseCase";

export class ChangeTaskStatusController {
    constructor(
        private changeTaskStatusUseCase: ChangeTaskStatusUseCase
    ) {}

    async handle(req:Request,res:Response){
        const {taskId,nextStatus,userId} = req.body;

        try {
            const task = await this.changeTaskStatusUseCase.execute({
                taskId,
                nextStatus
            });
            res.status(200).json(task);
        } catch (err) {
            res.status(404).json(err || 'Not found Task')
        }
    }
}