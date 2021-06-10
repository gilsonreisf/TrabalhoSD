import { Router } from "express";
import ChargeController from "./controllers/ChargeController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const chargeController = new ChargeController();

router.post("/users", userController.create)
router.post("/charge",chargeController.create)

export { router };