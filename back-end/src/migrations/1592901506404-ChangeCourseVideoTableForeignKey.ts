import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeCourseVideoTableForeignKey1592901506404 implements MigrationInterface {
    name = 'ChangeCourseVideoTableForeignKey1592901506404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" DROP CONSTRAINT "FK_1c9d48d197150678894ceb8afa5"`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "comment" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "video" ADD CONSTRAINT "FK_1c9d48d197150678894ceb8afa5" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" DROP CONSTRAINT "FK_1c9d48d197150678894ceb8afa5"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "enrollment" ALTER COLUMN "comment" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "video" ADD CONSTRAINT "FK_1c9d48d197150678894ceb8afa5" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
