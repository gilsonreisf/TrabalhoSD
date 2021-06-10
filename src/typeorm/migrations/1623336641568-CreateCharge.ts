import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCharge1623336641568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "charges",
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
                        name:"ip_charged_user",
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
        await queryRunner.dropTable("charges");
    }

}
