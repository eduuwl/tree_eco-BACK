/*
  Warnings:

  - Added the required column `CEP_emp` to the `cadastro_empresa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cadastro_empresa` ADD COLUMN `CEP_emp` VARCHAR(191) NOT NULL;
