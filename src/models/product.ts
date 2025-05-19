import { DataTypes } from "sequelize";
import db from "../db/conection";
const product = db.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    precio: {
        type: DataTypes.FLOAT,
    },
    imagen_url: {
        type: DataTypes.STRING,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

});
export default product;