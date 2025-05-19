"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const product = conection_1.default.define('Product', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    imagen_url: {
        type: sequelize_1.DataTypes.STRING,
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
});
exports.default = product;
//# sourceMappingURL=product.js.map