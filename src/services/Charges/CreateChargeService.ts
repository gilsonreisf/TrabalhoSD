import { injectable, inject } from "tsyringe";


import IHashProvider from "../../providers/HashProvider/models/IHashProvider";
import IChargeRepository from "../../i_repositories/IChargesRepository";
import Charge from "../../typeorm/entities/Charge";
import IUsersRepository from "../../i_repositories/IUsersRepository";
import AppError from "../../errors/AppError";

interface IRequest {
    ip_host_user: string ;

    ip_charged_user: string;

    pin: string;
  
    valor: number;
  }

@injectable()
export default class CreateChargeService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("ChargesRepository")
    private chargeRepository: IChargeRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}
  public async execute({
    ip_host_user,
    ip_charged_user,
    valor,
    pin,
  }: IRequest): Promise<Charge> {
    console.log(ip_host_user);
    const user = await this.usersRepository.findByIp(ip_host_user);
   
    if (!user) {
      throw new AppError("Não há usuário com esse Ip!", 403);
    }

    const passwordMatched = await this.hashProvider.compareHash(
        pin,
        user.pin,
      );

      if (!passwordMatched) {
        throw new AppError("O PIN está incorreto!", 403);
      }
  
  
    const charge = await this.chargeRepository.create({
        ip_host_user,
        ip_charged_user,
        valor,
      });
  
      return charge;
  }
}