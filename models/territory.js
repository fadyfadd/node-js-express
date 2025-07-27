const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequalize');


const Territory = sequelize.define('Territory', {
  territory_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  territory_description: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  region_id: {
    type: DataTypes.SMALLINT,
    allowNull: false
  }
}, {
  tableName: 'territories',
  timestamps: false
});

module.exports = Territory