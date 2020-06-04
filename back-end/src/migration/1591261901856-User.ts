import {MigrationInterface, QueryRunner} from "typeorm";

export class User1591261901856 implements MigrationInterface {
    name = 'User1591261901856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_065d4d8f3b5adb4a08841eae3c` ON `user`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `namen` varchar(50) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_64f50f6eedda73717c77407e32` (`namen`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_64f50f6eedda73717c77407e32`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `namen` `name` varchar(50) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_065d4d8f3b5adb4a08841eae3c` ON `user` (`name`)");
    }

}
