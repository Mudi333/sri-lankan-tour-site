import sequelize from "./utilities/db";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to your Postgres DB");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  } finally {
    await sequelize.close();
  }
}

main();