const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequalize');

const OrderDetail = sequelize.define('OrderDetail', {
  order_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    primaryKey: true,
  },
  unit_price: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'order_details',
  timestamps: false,
});

module.exports = OrderDetail