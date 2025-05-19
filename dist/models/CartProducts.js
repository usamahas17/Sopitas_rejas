"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const cart_1 = __importDefault(require("./cart"));
const product_1 = __importDefault(require("./product"));
const CartProduct = conection_1.default.define('CartProduct', {
    cartId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    productoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
});
cart_1.default.belongsToMany(product_1.default, { through: CartProduct, foreignKey: 'cartId' });
product_1.default.belongsToMany(cart_1.default, { through: CartProduct, foreignKey: 'productoId' });
exports.default = CartProduct;
//# sourceMappingURL=CartProducts.js.map