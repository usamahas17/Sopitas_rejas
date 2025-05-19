"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const Pago = conection_1.default.define('Pago', {
    buyOrder: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cardDetail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    transactionDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    authorizationCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
exports.default = Pago;
//# sourceMappingURL=pagos.js.map