"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const usuario_1 = __importDefault(require("./usuario"));
const cart = conection_1.default.define('Cart', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
cart.belongsTo(usuario_1.default, { foreignKey: 'userId' });
usuario_1.default.hasOne(cart, { foreignKey: 'userId' });
exports.default = cart;
//# sourceMappingURL=cart.js.map