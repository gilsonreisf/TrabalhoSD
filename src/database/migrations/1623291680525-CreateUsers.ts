import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1623291680525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "banco",
                        type: "varchar"
                    },
                    {
                        name: "conta_bancaria",
                        type: "varchar"
                    },
                    {
                        name : "agencia",
                        type: "varchar"
                    },
                    {
                        name: "numero_cartao",
                        type: "varchar"
                    },
                    {
                        name: "pin",
                        type: "varchar"
                    },
                    {
                        name: "ip_adress",
                        type: "varchar"
                    },
                    {
                        name: "saldo_conta",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
