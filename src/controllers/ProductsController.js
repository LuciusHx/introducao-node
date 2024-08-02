const ProductsModel = require('../models/ProductsModel')

const ProductsController = {
    create (request) {
        ProductsModel.create(request.body);
    },

    async list(){
        let products = await ProductsModel.findAll();
        console.log(products)
    },
}

module.exports = ProductsController;