
const UserModel = require('./models/UserModel');

// UserModel.create({
//     id: 2,
//     firstname: "Lucius",
//     lastname: "Machado",
//     email: "luciushebert13@gmail.com",
//     password: "cuida",
//     }
// );

UserModel.destroy({
    where: {
        id: 2
    }
})