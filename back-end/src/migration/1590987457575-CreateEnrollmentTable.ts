import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEnrollmentTable1590987457575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "enrollment",
        columns: [
          {
            name: "userId",
            type: "int",
          },
          {
            name: "courseId",
            type: "int",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("enrollment");
  }
}
