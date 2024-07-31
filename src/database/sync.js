const connection = require('./connection')

const UserModel = require('../models/UserModel');
const CategoryModels = require('../models/CategoryModel');
const ProductModel = require('../models/ProductsModel')

connection.sync({force:true})