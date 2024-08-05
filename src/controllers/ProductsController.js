const ProductsModel = require('../models/ProductsModel')

const ProductsController = {
    create (request, response){
        UserModel.create(request.body);
        return response.json({
            message: "Produto criado com sucesso!"
        });
    },

    async list(request, response){
        const products = await ProductsModel.findAll();
        response.json(products);
    },

    async update(request, response){
        let id = request.params.id;
        ProductsModel.update(request.body, {
            where: { id }
        });
        return response.json({
            message: "Produto atualizado com sucesso!"
        })
    },

    async delete(request, response){
        await ProductsModel.destroy({
            where: {
                id: request.params.id
            }
        });
        return response.json({
            message: "Produto excluído com sucesso."
        })
    },
}

module.exports = ProductsController;