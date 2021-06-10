import {
    DeepPartial,
    FindManyOptions,
    FindOneOptions,
    RemoveOptions,
  } from "typeorm";
  import ICreateUserDTO from "../dtos/ICreateUserDTO";
  import { User } from "../typeorm/entities/User";

  export default interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
}