const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequalize');

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  supplier_id: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  category_id: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  quantity_per_unit: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  unit_price: {
    type: DataTypes.REAL,
    allowNull: true,
  },
  units_in_stock: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  units_on_order: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  reorder_level: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  discontinued: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'products',
  timestamps: false,
});

module.exports = Product