import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UsersRepository } from "../repositories/Implementations/UsersRepository";

type JwtPayloadProps = {
  id: string;
};

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

        if (!authorization) {
            return response.status(401).json({ message: "unauthorized" });
        }

        try {
            const token = authorization.replace("Bearer", "").trim();
            const { id } = jwt.verify(token, "4f93ac9d10cb751b8c9c646bc9dbccb9") as JwtPayloadProps;

            const usersRepository = new UsersRepository();
            const user = await usersRepository.findById(id)
            
            if (!user) {
                throw new Error("unauthorized");
            }

            request.user = {
                email: user.email,
                name: user.name,
                avatar_img: user.avatar_img,
             };
            next();

        } catch (err) {
            return response
                .status(401)
                .json({ message: err.message || "unexpected error" });
        }
}


// const tk = env(SECRET_KEY)