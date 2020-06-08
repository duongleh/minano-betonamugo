import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnSalt1591618124422 implements MigrationInterface {
    name = 'AddColumnSalt1591618124422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `token` `salt` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `salt` `token` varchar(255) NOT NULL");
    }

}
