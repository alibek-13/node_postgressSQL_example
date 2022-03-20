const Pool = require('pg').Pool
 
const pool = new Pool({
    user: 'postgres',
    password: '025715259',
    host: 'localhost',
    port: 5432,
    database: 'shop_node'
})

module.exports = pool 