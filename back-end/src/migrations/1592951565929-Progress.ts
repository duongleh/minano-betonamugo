import {MigrationInterface, QueryRunner} from "typeorm";

export class Progress1592951565929 implements MigrationInterface {
    name = 'Progress1592951565929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "progress" ("enrollmentId" integer NOT NULL, "videoId" integer NOT NULL, CONSTRAINT "PK_7bb5308505023c74d8518287759" PRIMARY KEY ("enrollmentId", "videoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_af919f0d6d724681a06bcb41cb" ON "progress" ("enrollmentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0110ad5a87823462326ee6c30f" ON "progress" ("videoId") `);
        await queryRunner.query(`ALTER TABLE "enrollment" ADD "completionRatio" numeric(5,2) NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "comment" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_af919f0d6d724681a06bcb41cbb" FOREIGN KEY ("enrollmentId") REFERENCES "enrollment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_0110ad5a87823462326ee6c30fa" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_0110ad5a87823462326ee6c30fa"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_af919f0d6d724681a06bcb41cbb"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "comment" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "enrollment" DROP COLUMN "completionRatio"`);
        await queryRunner.query(`DROP INDEX "IDX_0110ad5a87823462326ee6c30f"`);
        await queryRunner.query(`DROP INDEX "IDX_af919f0d6d724681a06bcb41cb"`);
        await queryRunner.query(`DROP TABLE "progress"`);
    }

}
