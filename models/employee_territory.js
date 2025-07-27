const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequalize');

const EmployeeTerritory = sequelize.define('EmployeeTerritory', {
  employee_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: 'employees',
      key: 'employee_id'
    }
  },
  territory_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    references: {
      model: 'territories',
      key: 'territory_id'
    }
  },
  remarks: {
    type: DataTypes.STRING(250)
  }
}, {
  tableName: 'employee_territories',
  timestamps: false
});

module.exports = EmployeeTerritory