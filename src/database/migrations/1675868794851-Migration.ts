import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1675868794851 implements MigrationInterface {
  name = 'Migration1675868794851';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cat\` ADD \`kind\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`cat\` DROP COLUMN \`kind\``);
  }
}
