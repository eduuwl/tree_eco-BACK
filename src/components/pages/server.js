const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.post('/empresa', async (req, res) => {
  const { nome_emp, CNPJ_emp, email_emp, contato_emp, endereco_emp, CEP_emp, senha_emp, confirmar_senha, certificado_emp } = req.body;

  try {
    const empresa = await prisma.cadastro_empresa.create({
      data: {
        nome_emp,
        CNPJ_emp,
        email_emp,
        contato_emp,
        endereco_emp,
        CEP_emp,
        senha_emp,
        confirmar_senha, // Se você não está enviando confirmar_senha, remova esta linha
        certificado_emp
      }
    });
    res.json(empresa);
    console.log(empresa);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar empresa", message: error.message });
  }
});

// Rota para criar um novo cliente
app.post('/cliente', async (req, res) => {
  const { nome, cpf, email, telefone } = req.body;

  try {
    const cliente = await prisma.cadastro_cliente.create({
      data: {
        nome,
        cpf,
        email,
        telefone
      }
    });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar cliente", message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
