const connection = require('./database/connection');
const {QueryTypes} = require


async function execute() {
    const resultado = await connection.query('DESCRIBE produtos', {
        type: QueryTypes.DESCRIBE
    });

    const produtos = await connection.query('SELECT * FROM produtos WHERE id = 1', {
        type: QueryTypes.SELECT
    });
    
    console.log(produtos)
}

execute();