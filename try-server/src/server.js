import dotenv from "dotenv"
import app from "./app.js"
import { connectDB, sequelize } from "./config/db.js"
import { User } from "./models/User.js";

dotenv.config()

const PORT = process.env.PORT || 4000

async function start() {
  await connectDB()
  // sync models for now (later you can use migrations)
  await sequelize.sync({ alter: true })

  app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`)
  })
}

start().catch((err) => {
  console.error("Failed to start server:", err)
})
