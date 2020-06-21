import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1592687433175 implements MigrationInterface {
    name = 'InitialMigration1592687433175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "enrollment" ("id" SERIAL NOT NULL, "rate" integer NOT NULL DEFAULT 0, "comment" character varying DEFAULT null, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "courseId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "UQ_bb8d5ae5e144676c88c0ebd3c19" UNIQUE ("courseId", "userId"), CONSTRAINT "PK_7e200c699fa93865cdcdd025885" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "salt" character varying NOT NULL, "avatar" character varying DEFAULT null, "isBlock" boolean NOT NULL DEFAULT false, "role" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "video" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "url" character varying NOT NULL, "viewCount" integer NOT NULL DEFAULT 0, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "courseId" integer NOT NULL, CONSTRAINT "PK_1a2f3856250765d72e7e1636c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "thumbnail" character varying NOT NULL, "viewCount" integer NOT NULL DEFAULT 0, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" integer NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "enrollment" ADD CONSTRAINT "FK_d1a599a7740b4f4bd1120850f04" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enrollment" ADD CONSTRAINT "FK_e97ecbf11356b5173ce7fb0b060" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "video" ADD CONSTRAINT "FK_1c9d48d197150678894ceb8afa5" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_ebf0ff6d5d6aeaa87d9b4b29c0c" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_ebf0ff6d5d6aeaa87d9b4b29c0c"`);
        await queryRunner.query(`ALTER TABLE "video" DROP CONSTRAINT "FK_1c9d48d197150678894ceb8afa5"`);
        await queryRunner.query(`ALTER TABLE "enrollment" DROP CONSTRAINT "FK_e97ecbf11356b5173ce7fb0b060"`);
        await queryRunner.query(`ALTER TABLE "enrollment" DROP CONSTRAINT "FK_d1a599a7740b4f4bd1120850f04"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "video"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "enrollment"`);
    }

}
