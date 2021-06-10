import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity("charges")
class Charge {
    
    @PrimaryGeneratedColumn("increment")
    id: string;
  
    @Column({name:'ip_host_user'})
    ip_host_user: string
    
    @Column({name:'ip_charged_user'})
    ip_charged_user: string

    @Column()
    valor: number;
}

export default Charge ;