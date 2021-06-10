import { Router } from "express";
import userRouter from "../routes/user.routes";
import chargeRouter from "../routes/charges.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/charges", chargeRouter);


export default routes;