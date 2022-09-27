-- CreateTable
CREATE TABLE `ActivityLogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `eletedAt` DATETIME(0) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkLogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activityLogId` INTEGER NOT NULL,
    `title` VARCHAR(255) NULL,
    `description` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `eletedAt` DATETIME(0) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkLogs` ADD CONSTRAINT `WorkLogs_activityLogId_fkey` FOREIGN KEY (`activityLogId`) REFERENCES `ActivityLogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
