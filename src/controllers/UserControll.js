const ProductModel = require('../models/ProductsModel');
const UserModel = require('../models/UserModel')

const UserController = {

    async create(request, response) {
        let menssageReturn = '';
        const email = request.body.email
        const emailReq = await UserModel.findOne({
            where: {email}
        });

        // campo sem dados
        if (!request.body.firstname || !request.body.lastname || !request.body.email || !request.body.password) {
            menssageReturn = 'Todos os campos são obrigatórios!';
            return response.status(400).json({ messsage: menssageReturn })
        }
        else if (emailReq && emailReq.dataValues.id > 0) {
            messageReturn = 'Esse email já foi cadastrado!'

            return response.status(404).json({ message: messageReturn })
        }
        else {
            UserModel.create(request.body);
            menssageReturn = 'usuário criado com sucesso!'
        
            return response.status(201).json({message: menssageReturn})
        }


        // email
        // if (request.body.email === ) { }
    },

    async list(request, response) {
        const users = await UserModel.findOne();
        const products = await ProductModel.findAll({
            where: {
                user_id: users.id
            }
        });
        users.setDataValue('products', products)
        return response.json(users);
    },

    async update(request, response) {
        let id = request.params.id;
        UserModel.update(request.body, {
            where: { id }
        });
        return response.json({
            message: "Usuário atualizado com sucesso!"
        })
    },

    async delete(request, response) {
        await UserModel.destroy({
            where: {
                id: request.params.id
            }
        });
        return response.json({
            message: "Usuário excluído com sucesso."
        })
    },
}
module.exports = UserController;