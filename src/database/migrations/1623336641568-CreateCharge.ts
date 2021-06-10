import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCharge1623336641568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "charges",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        generationStrategy:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"id_host_user",
                        type: "varchar",
                    },
                    {
                        name:"id_charged_user",
                        type: "varchar",
                    },
                    {
                        name:"valor",
                        type:"real"
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
