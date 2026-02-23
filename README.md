# 🏦 Banco API

API REST para gerenciamento de contas bancárias, desenvolvida em **Node.js**, utilizando **Sequelize** como ORM e **PostgreSQL** como banco de dados.

O projeto segue uma arquitetura em camadas (Controller, Service e Repository), com foco em **regras de negócio**, organização e boas práticas.

---

## 🚀 Funcionalidades

- Criar conta bancária
- Consultar conta por ID
- Realizar depósito
- (em evolução) Saque com limite
- (em evolução) Transferência entre contas

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- UUID
- Dotenv
- Postman (para testes)

---

## 📁 Estrutura do projeto

```
src/
├── config/
│ └── database.js
│ └── init.js
├── controllers/
│ └── ContaController.js
├── models/
│ └── Conta.js
├── repositories/
│ └── ContaRepository.js
├── services/
│ └── BancoService.js
├── app.js
└── server.js
```

---

