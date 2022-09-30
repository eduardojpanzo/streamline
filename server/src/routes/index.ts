import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { projectsRoutes } from "./projects.routes";
import { tasksRoutes } from "./tasks.routes";
import { usersProjectsRoutes } from "./users.projects.routes";
import { usersRoutes } from "./users.routes";
import { usersTasksRoutes } from "./users.tasks.routes";


const router = Router();

router.use("/users",usersRoutes);

router.use(ensureAuthenticated);

router.use("/projects",projectsRoutes)

router.use("/usersProjects",usersProjectsRoutes)

router.use("/tasks",tasksRoutes);

router.use("/userstasks",usersTasksRoutes)



export {router}