import {
    DeepPartial,
    

  } from "typeorm";
  import User from "../typeorm/entities/User";
  import ICreateUserDTO from "../dtos/ICreateUserDTO";
  
  
  export default interface IUsersRepository {
    count(): Promise<number>;
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
    update(user: User, update: DeepPartial<User>): Promise<User>;
    findByIp(ip: string): Promise<User | undefined>;
  }
  