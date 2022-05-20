const sequelize = require("sequelize");


const DB_NAME = "devariaCandies"
const DB_USER = "root";
const DB_PASS = "3423_Vitor";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};

let dataBase = {};
const errorMesager = console.error('error when connecting the database');

try {

    dataBase = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
    
} catch (errorMesager) {};

const hasConnection = async () => {

    try {

        await dataBase.authenticate();
        console.log("Connected DataBase!");
        
    } catch (errorMesager) {}

} 

Object.assign(dataBase, {
    hasConnection
});

module.exports = dataBase;