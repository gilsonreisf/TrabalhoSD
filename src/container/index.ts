import { container } from "tsyringe";
import "../providers";

import ChargesRepository from "../typeorm/repositories/ChargesRepository"
import UsersRepository from "../typeorm/repositories/UsersRepository";
import IChargesRepository from "../i_repositories/IChargesRepository";
import IUsersRepository from "../i_repositories/IUsersRepository";


container.registerSingleton<IChargesRepository>(
  "ChargesRepository",
  ChargesRepository,
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
     UsersRepository,
  );

