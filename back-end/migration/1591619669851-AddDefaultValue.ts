import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDefaultValue1591619669851 implements MigrationInterface {
    name = 'AddDefaultValue1591619669851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `name` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `avatar` `avatar` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `isBlock` `isBlock` tinyint NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` tinyint NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `isBlock` `isBlock` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `avatar` `avatar` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `name` varchar(255) NOT NULL");
    }

}
