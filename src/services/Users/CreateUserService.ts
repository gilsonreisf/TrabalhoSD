import { injectable, inject } from "tsyringe";

import { User } from "../../typeorm/entities/User";
import IUserRepository from "../../repositories/IUsersRepository";
import IHashProvider from "../../providers/HashProvider/models/IHashProvider";

interface IRequest {
    nome: string;
  
    banco: string;
  
    conta_bancaria: number;
  
    agencia: number;
  
    numero_cartao: number;
  
    pin: string;
  
    ip_adress: string;
  
    saldo_conta: number;
  }

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}
  public async execute({
    nome,
    banco,
    conta_bancaria,
    agencia,
    numero_cartao,
    pin,
    ip_adress,
    saldo_conta
  }: IRequest): Promise<User> {
    
    const hashedPassword = await this.hashProvider.generateHash(pin);

    const user = await this.usersRepository.create({
        nome,
        banco,
        conta_bancaria,
        agencia,
        numero_cartao,
        pin,
        ip_adress,
        saldo_conta
      });
  
      return user;
  }
}