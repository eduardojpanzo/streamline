import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { projectsRoutes } from "./projects.routes";
import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";


const router = Router();

router.use("/users",usersRoutes);

router.use(ensureAuthenticated);

router.use("/projects",projectsRoutes)

router.use("/tasks",tasksRoutes);

export {router}