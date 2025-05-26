import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

let db: Sequelize;

if (process.env.DATABASE_URL) {
    console.log("🔌 Conectando a:", process.env.DATABASE_URL);

  // 🌐 Railway (producción)
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Importante para Railway
      },
    },
  });
} else {
  // 💻 Local
  db = new Sequelize(
    process.env.DB_NAME || 'ropitas',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '',
    {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      dialect: "postgres",
      logging: false,
    }
  );
}

export default db;
