import express, { Request, Response } from 'express';
import cors from 'cors';

import dotenv from "dotenv"
// import app from "./app.js"
// import { connectDB, sequelize } from "./config/db.js"
// import { User } from "./models/User.js";
dotenv.config()

const app = express();
const PORT = 4000


app.use(cors());
app.use(express.json());



app.post("/users/register", async (req: Request, res: Response) => {

  const { fullname, username, password } = req.body;


  console.log("we are in register endpoint", fullname, username, password);

  res.status(201).json({ msg: "cool!" });

})



app.listen(PORT, () => console.log(`Server up http://localhost:${PORT}`));











// async function start() {
//   await connectDB()

//   await sequelize.sync({ alter: true })

//   app.listen(PORT, () => {
//     console.log(`🚀 API running on http://localhost:${PORT}`)
//   })
// }

// start().catch((err) => {
//   console.error("Failed to start server:", err)
// })
