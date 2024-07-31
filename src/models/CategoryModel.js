const connection = require('../database/connection')
const {DataTypes} = require('sequelize')

let category = connection.define("Category", {
    firstname: DataTypes.STRING(50),
})

module.exports = category;