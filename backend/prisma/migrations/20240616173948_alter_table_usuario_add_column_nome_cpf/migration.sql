/*
  Warnings:

  - Added the required column `cpf` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_completo` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome_completo` VARCHAR(191) NOT NULL;
