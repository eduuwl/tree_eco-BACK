/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `cadastro_cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `confirm_senha` to the `cadastro_cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `cadastro_cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cadastro_cliente` ADD COLUMN `confirm_senha` VARCHAR(191) NOT NULL,
    ADD COLUMN `senha` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cadastro_empresa` MODIFY `confirmar_senha` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `cadastro_cliente_email_key` ON `cadastro_cliente`(`email`);
