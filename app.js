import express from "express"
import contaController from "./src/controllers/ContaController.js"
import { initDatabase } from "./src/config/init.js"

const app = express()
app.use(express.json())

await initDatabase()

app.post("/contas", contaController.criarConta)
app.post("/contas/:id/deposito", contaController.depositar)
app.post("/contas/:id/saque", contaController.sacar)
app.post("/transferencia", contaController.transferir)

export default app