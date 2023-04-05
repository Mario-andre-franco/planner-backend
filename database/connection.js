const dotenv = require('dotenv')
dotenv.config()


const knex = require('knex') ({
    client: 'pg',
    version: '15',
    connection: {
        host: process.env.PG_HOST,
        port: 5423,
        user: 'admin',
        password: process.env.PG_PASS,
        database: 'planner_db_iegy'
    }
})

module.exports = knex