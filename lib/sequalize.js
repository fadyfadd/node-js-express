const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`${process.env.pg_database}`, `${process.env.pg_username}`,  `${process.env.pg_password}`, {
  host: `${process.env.pg_server}`,
  dialect: `${process.env.pg_dialect}` 
});

module.exports = sequelize;