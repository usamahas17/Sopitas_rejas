import { DataTypes } from "sequelize";
import db from "../db/conection";

const Pago = db.define('Pago', {
  buyOrder: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cardDetail: {
    type: DataTypes.STRING,
    allowNull: true
  },
  transactionDate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorizationCode: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Pago;
