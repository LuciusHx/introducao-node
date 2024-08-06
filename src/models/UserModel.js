const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

let UserModel = connection.define("User",
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
        },

        firstname: {
            type: DataTypes.STRING(50), //firstname VARCHAR(50)
            allowNull: false, // NOT NULL
        }, 
        lastname: {
            type: DataTypes.STRING(50),  //lastname VARCHAR(50)
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),   //email VARCHAR(100)
            allowNull: false, // NOT NULL
        },
        password: {
            type: DataTypes.STRING(255),  //password VARCHAR(255),
            allowNull: false,
        },
    });

module.exports = UserModel;