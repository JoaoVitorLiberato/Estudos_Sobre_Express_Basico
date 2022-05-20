const dataBase = require("../database/indexDataBase");
const { DataTypes } = require("sequelize");

const products = dataBase.define("products", {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },

    nameProduct: {
        type: DataTypes.STRING
    },

    descriptionProduct: {
        type: DataTypes.STRING
    },

   


},

{
    tableName : "produto"
}
);

module.exports = products;


for(let i = 0; i < 100, i++){
    if(i % 2 == 1 ){
        console.log(i);
    }
}