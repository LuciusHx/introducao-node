const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

let ProductModel = connection.define("Product",
    {
        name: {
            type: DataTypes.STRING(255), //firstname VARCHAR(50)
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,  //lastname VARCHAR(50)
        },
        price: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false,
        },
        price_with_discont: {
            type: DataTypes.DECIMAL(5,2),
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

module.exports = ProductModel;