import {MigrationInterface, QueryRunner} from "typeorm";

export class DefaultValue1592138370175 implements MigrationInterface {
    name = 'DefaultValue1592138370175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "video" ALTER COLUMN "viewCount" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "viewCount" SET DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "viewCount" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "video" ALTER COLUMN "viewCount" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" DROP DEFAULT`);
    }

}
