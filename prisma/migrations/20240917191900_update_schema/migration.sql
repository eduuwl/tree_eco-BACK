/*
  Warnings:

  - You are about to drop the column `certificado_emp` on the `cadastro_empresa` table. All the data in the column will be lost.
  - You are about to drop the column `confirmar_senha` on the `cadastro_empresa` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `cadastro_cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `senha` to the `cadastro_cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cadastro_cliente` ADD COLUMN `senha` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cadastro_empresa` DROP COLUMN `certificado_emp`,
    DROP COLUMN `confirmar_senha`;

-- CreateIndex
CREATE UNIQUE INDEX `cadastro_cliente_email_key` ON `cadastro_cliente`(`email`);
