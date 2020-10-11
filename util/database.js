const Sequelize = require('sequelize')

const sequelize = new Sequelize('shopping_app', 'root', 'pass@word1', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize