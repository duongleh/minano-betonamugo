import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDefaultValue1591633791089 implements MigrationInterface {
    name = 'AddDefaultValue1591633791089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `avatar` `avatar` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `isBlock` `isBlock` tinyint NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `isBlock` `isBlock` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `avatar` `avatar` varchar(255) NOT NULL");
    }

}
