import { DataTypes } from "sequelize";
import db from "../db/conection";
import User from "./usuario";

const cart = db.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

});
cart.belongsTo(User, {foreignKey: 'userId'});
User.hasOne(cart, {foreignKey: 'userId'});
export default  cart;