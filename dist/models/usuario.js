"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const User = conection_1.default.define('User', {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    contraseña: { type: sequelize_1.DataTypes.STRING, allowNull: false },
});
exports.default = User;
//# sourceMappingURL=usuario.js.map