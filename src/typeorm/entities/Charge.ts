import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("charge")
class Charge {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @JoinColumn({name: "id_host_user"})
    id_host: string

    @JoinColumn({name: "id_charged_user"})
    id_charged_user: string

    @Column()
    valor: number;
}

export default Charge ;