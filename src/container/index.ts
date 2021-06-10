import { container } from "tsyringe";
import "../providers";

import IUserRepository from "../repositories/IUserRepository";
import UsersRepository from "../typeorm/repositories/UsersRepository";