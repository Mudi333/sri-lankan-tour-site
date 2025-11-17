import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

sequelize
  .authenticate()
  .then(() => console.log("connected!"))
  .catch((err) => console.log("error:", err));
