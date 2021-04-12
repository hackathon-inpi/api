import {MigrationInterface, QueryRunner} from "typeorm";

export class DemandRefactoring1618186254775 implements MigrationInterface {
    name = 'DemandRefactoring1618186254775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demand" ADD "idUser" integer`);
        await queryRunner.query(`ALTER TABLE "demand" ADD CONSTRAINT "FK_897df2d5de281fab2ae3c5eece4" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demand" DROP CONSTRAINT "FK_897df2d5de281fab2ae3c5eece4"`);
        await queryRunner.query(`ALTER TABLE "demand" DROP COLUMN "idUser"`);
    }

}
