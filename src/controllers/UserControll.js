const UserModel = require('../models/UserModel')

const UserController = {

    create (request, response){
        let menssageReturn = '';


        // campo sem dados
        if(!request.body.firstname || !request.body.surname || !request.body.email || !request.body.senha){
            menssageReturn = 'Todos os campos são obrigatórios!';
        } else{
            UserModel.create(request.body);
            menssageReturn = 'usuário criado com sucesso!'
        }; 
        return response.json({
            message: menssageReturn
        })

        // email
        if(request.body.email === ){}
    },

    async list(request, response){
        const users = await UserModel.findAll();
        response.json(users);
    },

    async update(request, response){
        let id = request.params.id;
        UserModel.update(request.body, {
            where: { id }
        });
        return response.json({
            message: "Usuário atualizado com sucesso!"
        })
    },

    async delete(request, response){
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