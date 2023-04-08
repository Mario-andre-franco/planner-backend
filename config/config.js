const env = require('dotenv')

env.config()

module.exports = {
    'secret' : process.env.SECRET 
}