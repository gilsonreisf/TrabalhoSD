
  import Payment from "../typeorm/entities/Payment";
  import ICreatePaymentsDTO from "../dtos/ICreatePaymentDTO";
  
  
  export default interface IPaymentsRepository {
    count(): Promise<number>;
    create(data: ICreatePaymentsDTO): Promise<Payment>;
    save(Payments: Payment): Promise<Payment>;
    findById(id: string): Promise<Payment | undefined>;
  }
  