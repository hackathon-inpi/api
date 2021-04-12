import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRefactoring1618234239502 implements MigrationInterface {
    name = 'UserRefactoring1618234239502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "senha" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "numeroPatentes" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "numeroMarcas" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "numeroSoftwares" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "numeroSoftwares"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "numeroMarcas"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "numeroPatentes"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`);
    }

}
