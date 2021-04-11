import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDemandGRU1618112095604 implements MigrationInterface {
    name = 'CreateDemandGRU1618112095604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "protocol_gru" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "price" integer NOT NULL, "barCode" character varying NOT NULL, "user_id" integer, CONSTRAINT "REL_73af2f433dba096fa6e6f89c5c" UNIQUE ("user_id"), CONSTRAINT "PK_d7c4b22f98928e54fcbccabe020" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "demand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "historical" character varying array NOT NULL, "idGRU" integer, CONSTRAINT "REL_8e80284cbb59fb766dd617cb71" UNIQUE ("idGRU"), CONSTRAINT "PK_2e27cd7b3d79c50d197cb0b3924" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "protocol_gru" ADD CONSTRAINT "FK_73af2f433dba096fa6e6f89c5c8" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "demand" ADD CONSTRAINT "FK_8e80284cbb59fb766dd617cb71e" FOREIGN KEY ("idGRU") REFERENCES "protocol_gru"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demand" DROP CONSTRAINT "FK_8e80284cbb59fb766dd617cb71e"`);
        await queryRunner.query(`ALTER TABLE "protocol_gru" DROP CONSTRAINT "FK_73af2f433dba096fa6e6f89c5c8"`);
        await queryRunner.query(`DROP TABLE "demand"`);
        await queryRunner.query(`DROP TABLE "protocol_gru"`);
    }

}
