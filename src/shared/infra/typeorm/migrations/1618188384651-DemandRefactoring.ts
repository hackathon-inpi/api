import {MigrationInterface, QueryRunner} from "typeorm";

export class DemandRefactoring1618188384651 implements MigrationInterface {
    name = 'DemandRefactoring1618188384651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demand" DROP COLUMN "historical"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "protocol_gru" DROP COLUMN "price"`);
    }

}
