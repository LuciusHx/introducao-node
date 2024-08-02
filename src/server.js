const express = require('express');
const app = express();
app.use(express.json())

const ProductModel = require('./models/ProductsModel')
const UserModel = require('./models/UserModel')

app.get('/products', async function(request, response){
    const products = await ProductModel.findAll();
    response.json(products);
})

app.get('/users', async function(request, response){
    const users = await UserModel.findAll();
    response.json(users);
})
app.post('/users', async function(request, response){
    UserModel.create(request.body);
    return response.json({
        message: "Usuário criado com sucesso!"
    });
})



app.listen(3000);