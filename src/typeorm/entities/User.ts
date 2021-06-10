import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
class User {
    
    @PrimaryGeneratedColumn('increment')
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



}

export default User ;