/*
  Warnings:

  - You are about to drop the column `eletedAt` on the `ActivityLogs` table. All the data in the column will be lost.
  - You are about to drop the column `eletedAt` on the `WorkLogs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ActivityLogs` DROP COLUMN `eletedAt`,
    ADD COLUMN `deletedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `WorkLogs` DROP COLUMN `eletedAt`,
    ADD COLUMN `deletedAt` DATETIME(0) NULL;
