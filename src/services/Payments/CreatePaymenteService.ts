import { injectable, inject } from "tsyringe";


import IHashProvider from "../../providers/HashProvider/models/IHashProvider";
import IChargeRepository from "../../i_repositories/IChargesRepository";
import Charge from "../../typeorm/entities/Charge";
import IUsersRepository from "../../i_repositories/IUsersRepository";
import AppError from "../../errors/AppError";
import IPaymentsRepository from "../../i_repositories/IPaymentsRepository";
import Payment from "../../typeorm/entities/Payment";

interface IRequest {
    id_charge: string;

    ip_host_user: string ;

    ip_charging_user: string;

    pin: string;
  
  }

@injectable()
export default class CreatePaymentService {
  constructor(
    @inject("PaymentsRepository")
    private paymentsRepository: IPaymentsRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("ChargesRepository")
    private chargeRepository: IChargeRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}
  public async execute({
    id_charge,
    ip_host_user,
    ip_charging_user,
    pin,
  }: IRequest): Promise<Payment> {
    
    const charge = await this.chargeRepository.findById(id_charge);

    if (!charge) {
        throw new AppError("Essa cobrança não foi encontrada!", 403);
      }

    const userHost = await this.usersRepository.findByIp(ip_host_user);
    const userCharging = await this.usersRepository.findByIp(ip_charging_user);

   
    if (!userHost) {
      throw new AppError("Não há usuário com esse Ip!", 403);
    }

    if (!userCharging) {
        throw new AppError("Não há usuário com esse Ip!", 403);
      }

      const saldoHost = userHost.saldo_conta;
      
      if(charge.valor > saldoHost){
        throw new AppError("Saldo Insuficiente!", 403);
      }


    const passwordMatched = await this.hashProvider.compareHash(
        pin,
        userHost.pin,
      );

      if (!passwordMatched) {
        throw new AppError("O PIN está incorreto!", 403);
      }
  
  
    const payment = await this.paymentsRepository.create({
        ip_host_user,
        ip_charging_user,
        valor:charge.valor,
      });

      
     await this.usersRepository.update(userHost,{saldo_conta:saldoHost - charge.valor});
      

     await this.usersRepository.update(userCharging,{saldo_conta: userCharging.saldo_conta + charge.valor});

     await this.chargeRepository.delete(charge.id);
     
  
    return payment;
  }
}