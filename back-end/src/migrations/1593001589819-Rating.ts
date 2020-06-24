import {MigrationInterface, QueryRunner} from "typeorm";

export class Rating1593001589819 implements MigrationInterface {
    name = 'Rating1593001589819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ADD "rate" integer NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "rate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "rate" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "comment" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "comment" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "rate" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "rate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "rate"`);
    }

}
