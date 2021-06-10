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
 
  @EntityRepository(Charge)
  export default class ChargesRepository implements IChargesRepository
     {
    private ormRepository: Repository<Charge>;
  
    constructor() {
      this.ormRepository = getRepository(Charge);
    }
      public async save(charge: Charge): Promise<Charge> {
         return await this.ormRepository.save(charge);
      }
  
  
    public async count(): Promise<number> {
      return this.ormRepository.count();
    }
  
    public async create(data: ICreateChargeDTO) {
      const charge = this.ormRepository.create(data);
  
      await this.ormRepository.save(charge);
  
      return charge;
    }
  
  
    public async findById(id: string | number, options?: FindOneOptions) {
 
      const academicLeague = await this.ormRepository.findOne(id, options);
  
      return academicLeague;
    }

  

  
    public async update(
      charge: Charge,
      update: DeepPartial<Charge>,
    ) {
      this.ormRepository.merge(charge, update);
      const mergedData = await this.ormRepository.save(charge);
  
      return mergedData;
    }
  }
  