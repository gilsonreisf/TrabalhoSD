import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();
const usersController = new UserController();

userRouter.post("/", usersController.create);
userRouter.post("/updateSaldo",usersController.update);

export default userRouter;