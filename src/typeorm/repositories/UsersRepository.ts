import {
    EntityRepository,
    DeepPartial,
    getRepository,
    Repository,
  } from "typeorm";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../i_repositories/IUsersRepository";
import User from "../entities/User";

 
  @EntityRepository(User)
  export default class UsersRepository implements IUsersRepository
     {
    private ormRepository: Repository<User>;
  
    constructor() {
      this.ormRepository = getRepository(User);
    }
      public async save(user: User): Promise<User> {
         return await this.ormRepository.save(user);
      }
  
  
    public async count(): Promise<number> {
      return this.ormRepository.count();
    }
  
    public async create(data: ICreateUserDTO) {
      
      const user = this.ormRepository.create(data);
  
      await this.ormRepository.save(user);
  
      return user;
    }

    public async findByIp(ip: string): Promise<User | undefined> {
      const findUser = await this.ormRepository.findOne({
        where: { ip_adress:ip },
      });
    
      return findUser;
    }

    public async getSaldo(ip:string):Promise<number | undefined>{
      const  findUser = await this.ormRepository.findOne({
        where: { ip_adress:ip },
      });
     const saldo =  findUser?.saldo_conta;
      return saldo;
    }
  
    public async update(
      user: User,
      update: DeepPartial<User>,
    ) {
      this.ormRepository.merge(user, update);
      const mergedData = await this.ormRepository.save(user);
  
      return mergedData;
    }

 

  }
  