import { Request, Response } from "express";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";

export class DeleteProjectController {
    constructor(private deleteProjectUseCase: DeleteProjectUseCase) {}

    async handle (req:Request, res:Response){
        const {projectId} = req.body;

        try {
            const deletedProject = await this.deleteProjectUseCase.execute(projectId);
            return res.json(deletedProject);

          } catch (err) {
            return res.status(401).json({ message: err.message || "User not found"});
          }
    }
}