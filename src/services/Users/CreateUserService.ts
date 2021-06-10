import { injectable, inject } from "tsyringe";

import User  from "../../typeorm/entities/User";
import IHashProvider from "../../providers/HashProvider/models/IHashProvider";
import IUsersRepository from "../../i_repositories/IUsersRepository";

interface IRequest {
    ip_adress: string;

    nome: string;
  
    banco: string;
  
    conta_bancaria: number;
  
    agencia: number;
  
    numero_cartao: number;
  
    pin: string;
  
    saldo_conta: number;
  }

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}
  public async execute({
    ip_adress,
    nome,
    banco,
    conta_bancaria,
    agencia,
    numero_cartao,
    pin,
    saldo_conta
  }: IRequest): Promise<User> {
    
    const hashedPassword = await this.hashProvider.generateHash(pin);

    const user = await this.usersRepository.create({
        ip_adress,
        nome,
        banco,
        conta_bancaria,
        agencia,
        numero_cartao,
        pin: hashedPassword,
        saldo_conta
      });
  
      return user;
  }
}