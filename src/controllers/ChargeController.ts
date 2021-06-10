import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateChargeService from "../services/Charges/CreateChargeService";

export default class ChargeController{

    public async create(req:Request,res:Response){
        const createCharge = container.resolve(CreateChargeService);
        
        const {
            ip_host_user,
            ip_charged_user,
            valor,
           
            pin
        }= req.body;

       const charge = await createCharge.execute({ip_charged_user:ip_charged_user,valor,ip_host_user:ip_host_user,pin });
    
       return res
            .status(200)
            .json({ message: "Cobrança cadastrada com sucesso", charge });
    }


}