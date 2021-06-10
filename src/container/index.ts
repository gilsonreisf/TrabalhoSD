import { container } from "tsyringe";
import "../providers";

import ChargeRepository from "../database/repositories/ChargeRepository"
import UserRepository from "../database/repositories/UserRepository";

container.registerSingleton<ChargeRepository>(
  "ChargeRepository",
  ChargeRepository,
);

container.registerSingleton<UserRepository>(
    "UserRepository",
    UserRepository,
  );

