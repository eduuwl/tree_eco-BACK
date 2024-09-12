-- CreateTable
CREATE TABLE `CadastroEmpresa` (
    `ID_emp` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_emp` VARCHAR(191) NOT NULL,
    `CNPJ_emp` VARCHAR(191) NOT NULL,
    `email_emp` VARCHAR(191) NOT NULL,
    `contato_emp` VARCHAR(191) NULL,
    `endereco_emp` VARCHAR(191) NULL,
    `CEP_emp` VARCHAR(191) NULL,
    `senha_emp` VARCHAR(191) NOT NULL,
    `Certificado` VARCHAR(191) NULL,

    UNIQUE INDEX `CadastroEmpresa_nome_emp_key`(`nome_emp`),
    UNIQUE INDEX `CadastroEmpresa_CNPJ_emp_key`(`CNPJ_emp`),
    PRIMARY KEY (`ID_emp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CadastroCliente` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,

    UNIQUE INDEX `CadastroCliente_cpf_key`(`cpf`),
    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
