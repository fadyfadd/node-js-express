
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequalize');

const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.CHAR(5), 
      allowNull: true
    },
    employee_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    required_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shipped_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ship_via: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    freight: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ship_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ship_address: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ship_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ship_region: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ship_postal_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ship_country: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'orders',
    timestamps: false  
  });


  module.exports = Order