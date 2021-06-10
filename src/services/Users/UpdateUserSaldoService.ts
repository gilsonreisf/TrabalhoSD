import { injectable, inject } from "tsyringe";

import User  from "../../typeorm/entities/User";
import IHashProvider from "../../providers/HashProvider/models/IHashProvider";
import IUsersRepository from "../../i_repositories/IUsersRepository";
import AppError from "../../errors/AppError";

interface IRequest {
    valor:number,
    ip_host_user:string,
    pin: string,
  }

@injectable()
export default class UpdateUserSaldoService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}
  public async execute({
    ip_host_user,
    valor,
    pin
  }: IRequest): Promise<User> {
    
    const userHost = await this.usersRepository.findByIp(ip_host_user);

    if (!userHost) {
        throw new AppError("Essa Usuário não foi encontrado!", 403);
      }

      const passwordMatched = await this.hashProvider.compareHash(
        pin,
        userHost.pin,
      );

      if (!passwordMatched) {
        throw new AppError("O PIN está incorreto!", 403);
      }
  
    const user = await this.usersRepository.update(userHost,{
        saldo_conta: userHost.saldo_conta + valor,
      });

      //@ts-expect-error
      delete user.pin

      return user;
  }
}