import { User } from "../entities/User";
import {
  EntityRepository,
  getRepository,
  Repository,
  DeepPartial
} from "typeorm";

import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUserRepository from "../../repositories/IUsersRepository";

@EntityRepository(User)
export default class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }
}