import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();
const usersController = new UserController();

userRouter.post("/", usersController.create);

export default userRouter;