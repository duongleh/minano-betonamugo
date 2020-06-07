import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1591459339175 implements MigrationInterface {
    name = 'InitialMigration1591459339175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `enrollment` (`id` int NOT NULL AUTO_INCREMENT, `rate` int NOT NULL, `comment` varchar(255) NOT NULL, `achievement` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL, `courseId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `token` varchar(255) NOT NULL, `avatar` varchar(255) NOT NULL, `isBlock` tinyint NOT NULL, `role` tinyint NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `video` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `url` varchar(255) NOT NULL, `viewCount` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `courseId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `course` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `thumbnail` varchar(255) NOT NULL, `viewCount` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `enrollment` ADD CONSTRAINT `FK_e97ecbf11356b5173ce7fb0b060` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `enrollment` ADD CONSTRAINT `FK_d1a599a7740b4f4bd1120850f04` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `video` ADD CONSTRAINT `FK_1c9d48d197150678894ceb8afa5` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `course` ADD CONSTRAINT `FK_ebf0ff6d5d6aeaa87d9b4b29c0c` FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `course` DROP FOREIGN KEY `FK_ebf0ff6d5d6aeaa87d9b4b29c0c`");
        await queryRunner.query("ALTER TABLE `video` DROP FOREIGN KEY `FK_1c9d48d197150678894ceb8afa5`");
        await queryRunner.query("ALTER TABLE `enrollment` DROP FOREIGN KEY `FK_d1a599a7740b4f4bd1120850f04`");
        await queryRunner.query("ALTER TABLE `enrollment` DROP FOREIGN KEY `FK_e97ecbf11356b5173ce7fb0b060`");
        await queryRunner.query("DROP TABLE `course`");
        await queryRunner.query("DROP TABLE `video`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `enrollment`");
    }

}
