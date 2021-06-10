import { Request, Response } from "express";
import { container } from "tsyringe";

import CreatePaymentService from "../services/Payments/CreatePaymenteService";
import io from 'socket.io';



export default class PaymentController{

    public async create(req:Request,res:Response){
        const createPayment = container.resolve(CreatePaymentService);
          
        const {
            id_charge,
            ip_host_user,
            ip_charging_user,

            pin
        }= req.body;

       const payment = await createPayment.execute({ip_charging_user,ip_host_user,pin,id_charge });
    
    
       return res
            .status(200)
            .json({ message: "Pagamento realizado com sucesso", payment });
    }

   


}