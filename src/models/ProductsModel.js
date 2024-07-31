const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

let ProductModel = connection.define("Product",
    {
        name: DataTypes.STRING(255), //firstname VARCHAR(50)
        description: DataTypes.TEXT,  //lastname VARCHAR(50)
        email: DataTypes.STRING(100),   //email VARCHAR(100)
        price: DataTypes.DECIMAL(5,2),
        price_with_discont: DataTypes.DECIMAL(5,2),
        enabled: DataTypes.BOOLEAN,
        stock: DataTypes.INTEGER
    });

module.exports = ProductModel;