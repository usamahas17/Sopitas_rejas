"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let db;
if (process.env.DATABASE_URL) {
    // 🌐 Railway (producción)
    db = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
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
}
else {
    // 💻 Local
    db = new sequelize_1.Sequelize(process.env.DB_NAME || 'ropitas', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD || '', {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        dialect: "postgres",
        logging: false,
    });
}
exports.default = db;
//# sourceMappingURL=conection.js.map