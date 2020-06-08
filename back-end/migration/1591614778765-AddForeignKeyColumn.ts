import {MigrationInterface, QueryRunner} from "typeorm";

export class AddForeignKeyColumn1591614778765 implements MigrationInterface {
    name = 'AddForeignKeyColumn1591614778765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `enrollment` DROP FOREIGN KEY `FK_e97ecbf11356b5173ce7fb0b060`");
        await queryRunner.query("ALTER TABLE `enrollment` DROP FOREIGN KEY `FK_d1a599a7740b4f4bd1120850f04`");
        await queryRunner.query("ALTER TABLE `enrollment` CHANGE `userId` `userId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `enrollment` CHANGE `courseId` `courseId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `video` DROP FOREIGN KEY `FK_1c9d48d197150678894ceb8afa5`");
        await queryRunner.query("ALTER TABLE `video` CHANGE `courseId` `courseId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `course` DROP FOREIGN KEY `FK_ebf0ff6d5d6aeaa87d9b4b29c0c`");
        await queryRunner.query("ALTER TABLE `course` CHANGE `ownerId` `ownerId` int NOT NULL");
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
        await queryRunner.query("ALTER TABLE `course` CHANGE `ownerId` `ownerId` int NULL");
        await queryRunner.query("ALTER TABLE `course` ADD CONSTRAINT `FK_ebf0ff6d5d6aeaa87d9b4b29c0c` FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `video` CHANGE `courseId` `courseId` int NULL");
        await queryRunner.query("ALTER TABLE `video` ADD CONSTRAINT `FK_1c9d48d197150678894ceb8afa5` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `enrollment` CHANGE `courseId` `courseId` int NULL");
        await queryRunner.query("ALTER TABLE `enrollment` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `enrollment` ADD CONSTRAINT `FK_d1a599a7740b4f4bd1120850f04` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `enrollment` ADD CONSTRAINT `FK_e97ecbf11356b5173ce7fb0b060` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
