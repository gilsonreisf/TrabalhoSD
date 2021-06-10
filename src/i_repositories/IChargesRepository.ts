import {
    DeepPartial,
    

  } from "typeorm";
  import Charge from "../typeorm/entities/Charge";
  import ICreateChargeDTO from "../dtos/ICreateChargeDTO";
  
  
  export default interface IChargeRepository {
    count(): Promise<number>;
    create(data: ICreateChargeDTO): Promise<Charge>;
    save(charge: Charge): Promise<Charge>;
    update(charge: Charge, update: DeepPartial<Charge>): Promise<Charge>;
  }
  