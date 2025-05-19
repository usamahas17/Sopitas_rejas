import { DataTypes } from "sequelize";
import db from "../db/conection";
import cart from "./cart";
import product from "./product";

const CartProduct = db.define('CartProduct', {
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    productoId: {
        type: DataTypes.INTEGER,
        allowNull: false,


    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
});
cart.belongsToMany(product, {through:CartProduct , foreignKey: 'cartId'});
product.belongsToMany(cart,{through:CartProduct , foreignKey: 'productoId'});
export default CartProduct;