import { Router } from "express";
import ChargeController from "../controllers/ChargeController";

const chargeRouter = Router();
const chargeController = new ChargeController();

chargeRouter.post("/", chargeController.create);

export default chargeRouter;