const express = require('express');
const app = express();
app.use(express.json())

const UserController = require('./controllers/UserControll');
const ProductsController = require('./controllers/ProductsController');

//Products~
app.post('/products', ProductsController.create);
app.get('/products', ProductsController.list);
app.put('/products/:id', ProductsController.update)
app.delete('/productsDelete/:id', ProductsController.delete);


//Users
app.post('/users', UserController.create);
app.get('/users', UserController.list);
app.put('/users/:id', UserController.update)
app.delete('/usersDelete/:id', UserController.delete);




app.listen(3000);