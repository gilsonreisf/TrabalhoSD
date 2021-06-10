import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity("payments")
class Payment {
    
    @PrimaryGeneratedColumn("increment")
    id: string;
  
    @Column({name:'ip_host_user'})
    ip_host_user: string
    
    @Column({name:'ip_charging_user'})
    ip_charging_user: string

    @Column()
    valor: number;
}

export default Payment ;