-- AlterTable
ALTER TABLE `snippets` MODIFY `date_created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP (0),
    MODIFY `date_updated` DATETIME(0) NULL;
