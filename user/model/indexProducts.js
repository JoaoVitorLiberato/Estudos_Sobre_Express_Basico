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

    idMarca: {
        type: DataTypes.INTEGER,
        references: {
            model: marcaProduct,
            key: "id"
        }
    }


},

{
    tableName : "produto"
}
);

module.exports = products;