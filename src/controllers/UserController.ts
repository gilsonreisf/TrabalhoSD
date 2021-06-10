import { Request, Response} from "express";
import { container } from "tsyringe";

import CreateUserService from "../services/Users/CreateUserService";


export default class UserController {
    async create(request: Request, response: Response) {
        
        const createUser = container.resolve(CreateUserService);

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
        
        const user = await createUser.execute({
            nome, 
            banco, 
            conta_bancaria, 
            agencia, 
            numero_cartao, 
            pin, 
            ip_adress,
            saldo_conta
        })
        // @ts-expect-error
        delete user.pin;

        return response
            .status(200)
            .json({ message: "Usuário cadastrado com sucesso", user });
    }
}

export { UserController };