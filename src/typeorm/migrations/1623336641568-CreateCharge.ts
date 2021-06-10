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
                        isPrimary: true
                    },
                    {
                        name:"id_host_user",
                        type: "int",
                    },
                    {
                        name:"id_charged_user",
                        type: "int",
                    },
                    {
                        name:"valor",
                        type:"float"
                    }
                ]
            
            })
        );


           await queryRunner.createForeignKeys("charges", [
      new TableForeignKey({
        columnNames: ["id_host_user"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      }),
      new TableForeignKey({
        columnNames: ["id_charged_user"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      }),
     
    ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("charges");
    }

}
