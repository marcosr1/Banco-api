import sequelize from "./database.js"
import "../models/ContaModel.js"

export async function initDatabase() {
  await sequelize.sync()
}