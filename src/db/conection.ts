import { Sequelize } from "sequelize";
const db = new Sequelize('ropitas', 'postgres', 'waffen02',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    port: 5432,

});
export default db;