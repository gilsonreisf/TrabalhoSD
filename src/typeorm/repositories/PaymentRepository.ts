import {
    EntityRepository,
    DeepPartial,
    getRepository,
    FindOneOptions,
    Repository,
  } from "typeorm";
import ICreateChargeDTO from "../../dtos/ICreateChargeDTO";
import Charge  from "../entities/Charge";
import IChargesRepository from '../../i_repositories/IChargesRepository';
import ICreatePaymentDTO from "../../dtos/ICreatePaymentDTO";
import Payment from "../entities/Payment";
import IPaymentsRepository from "../../i_repositories/IPaymentsRepository";
 
  @EntityRepository(Payment)
  export default class PaymentRepository implements IPaymentsRepository
     {
    private ormRepository: Repository<Payment>;
  
    constructor() {
      this.ormRepository = getRepository(Payment);
    }
      public async save(payment: Payment): Promise<Payment> {
         return await this.ormRepository.save(payment);
      }
  
  
    public async count(): Promise<number> {
      return this.ormRepository.count();
    }
  
    public async create(data: ICreatePaymentDTO) {
      const payment = this.ormRepository.create(data);
  
      await this.ormRepository.save(payment);
  
      return payment;
    }
  
  
    public async findById(id: string | number) {
 
      const payment = await this.ormRepository.findOne(id);
  
      return payment;
    }

  

  }
  