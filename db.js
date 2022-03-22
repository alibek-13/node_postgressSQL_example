import pkg from 'pg';

const { Pool } = pkg;

export const pool = new Pool({
    user: 'postgres',
    password: '025715259',
    host: 'localhost',
    port: 5432,
    database: 'shop_node'
})

