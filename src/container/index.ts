import { container } from "tsyringe";
import "../providers";

import ChargesRepository from "../typeorm/repositories/ChargesRepository"
import UsersRepository from "../typeorm/repositories/UsersRepository";
import IChargesRepository from "../i_repositories/IChargesRepository";
import IUsersRepository from "../i_repositories/IUsersRepository";
import IPaymentsRepository from "../i_repositories/IPaymentsRepository";
import PaymentReposity from "../typeorm/repositories/PaymentRepository";


container.registerSingleton<IChargesRepository>(
  "ChargesRepository",
  ChargesRepository,
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
     UsersRepository,
  );

  container.registerSingleton<IPaymentsRepository>(
    "PaymentsRepository",
    PaymentReposity,
  );