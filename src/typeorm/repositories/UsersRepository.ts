import { User } from "../entities/User";
import {
  EntityRepository,
  getRepository,
  Repository,
  FindManyOptions,
  FindOneOptions,
  RemoveOptions,
  DeepPartial,
} from "typeorm";

import IUserRepository from "../../repositories/IUsersRepository";
