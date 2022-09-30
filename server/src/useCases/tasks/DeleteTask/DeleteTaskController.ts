import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

    async handle (req:Request, res:Response){
        const {taskId,userId,projectId} = req.body;

        try {
            const deletedTask = await this.deleteTaskUseCase.execute(taskId);
            return res.json(deletedTask);

          } catch (err) {
            return res.status(401).json({ message: err.message || "User not found"});
          }
    }
}