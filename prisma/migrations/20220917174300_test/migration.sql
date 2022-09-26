-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(255) NULL,
    `content` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `publish` BOOLEAN NOT NULL,
    `deletedAt` DATETIME(0) NULL,
    `createdAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
