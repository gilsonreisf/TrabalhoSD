import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    banco: string;

    @Column()
    conta_bancaria: number;

    @Column()
    agencia: number;

    @Column()
    numero_cartao: number;

    @Column()
    pin: string;

    @Column()
    ip_adress: string;

    @Column()
    saldo_conta: number;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }

}

export {  User };