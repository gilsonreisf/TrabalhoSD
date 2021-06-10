import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePayment1623356492090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "payments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        generationStrategy:"increment",
                        isGenerated:true,
                        isPrimary: true
                    },
                    {
                        name:"ip_host_user",
                        type: "varchar",
                    },
                    {
                        name:"ip_charging_user",
                        type: "varchar",
                    },
                    {
                        name:"valor",
                        type:"float"
                    }
                ]
            
            })
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payments");
    }

}
