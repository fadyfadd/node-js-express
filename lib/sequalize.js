const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('northwind', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres' 
});

module.exports = sequelize;