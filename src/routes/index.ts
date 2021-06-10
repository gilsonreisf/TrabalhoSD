import { Router } from "express";
import userRouter from "../routes/user.routes";
import chargeRouter from "../routes/charges.routes";
import paymentRouter from "./payment.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/charges", chargeRouter);
routes.use("/payments", paymentRouter);



export default routes;