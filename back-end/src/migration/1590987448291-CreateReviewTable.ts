import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateReviewTable1590987448291 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "review",
        columns: [
          {
            name: "userId",
            type: "int",
          },
          {
            name: "courseId",
            type: "int",
          },
          {
            name: "rate",
            type: "int",
          },
          {
            name: "comment",
            type: "varchar",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
