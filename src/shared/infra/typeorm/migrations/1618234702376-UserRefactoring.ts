import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRefactoring1618234702376 implements MigrationInterface {
    name = 'UserRefactoring1618234702376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "senha" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "senha" integer NOT NULL`);
    }

}
