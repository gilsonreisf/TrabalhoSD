import { Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../typeorm/entities/User";

class UserController {
    async create(request: Request, response: Response) {
        const { 
            nome, 
            banco, 
            conta_bancaria, 
            agencia, 
            numero_cartao, 
            pin, 
            ip_adress, 
            saldo_conta
        } = request.body;

        const userRepository = getRepository(User);

        const user = userRepository.create({
            nome, 
            banco, 
            conta_bancaria, 
            agencia, 
            numero_cartao, 
            pin, 
            ip_adress,
            saldo_conta
        })

        await userRepository.save(user);

        return response.send();
    }
}

export { UserController };