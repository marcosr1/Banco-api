import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()

app.listen(3000, () => {
  console.log("🔥 API bancária rodando na porta 3000")
})