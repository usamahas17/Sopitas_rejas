"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('ropitas', 'postgres', 'waffen02', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    port: 5432,
});
exports.default = db;
//# sourceMappingURL=conection.js.map