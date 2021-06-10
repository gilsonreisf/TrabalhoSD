import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1623291680525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isGenerated:true,
                        generationStrategy:'increment',
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "banco",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "conta_bancaria",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name : "agencia",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "numero_cartao",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "pin",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "ip_adress",
                        type: "varchar",
                        isNullable: false,
                    },
           
                    {
                        name: "saldo_conta",
                        type: "float",
                        isNullable: true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
