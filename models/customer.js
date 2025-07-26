  
 
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequalize');

const Customer = sequelize.define('Customer', {
  customerId: {
    type: DataTypes.STRING,   
    primaryKey: true,
    allowNull: false,
    field: 'customer_id',
  },
  companyName: {
    type: DataTypes.STRING(40),
    allowNull: false,
    field: 'company_name',
  },
  contactName: {
    type: DataTypes.STRING(30),
    field: 'contact_name',
  },
  contactTitle: {
    type: DataTypes.STRING(30),
    field: 'contact_title',
  },
  address: {
    type: DataTypes.STRING(60),
    field: 'address',
  },
  city: {
    type: DataTypes.STRING(15),
    field: 'city',
  },
  region: {
    type: DataTypes.STRING(15),
    field: 'region',
  },
  postalCode: {
    type: DataTypes.STRING(10),
    field: 'postal_code',
  },
  country: {
    type: DataTypes.STRING(15),
    field: 'country',
  },
  phone: {
    type: DataTypes.STRING(24),
    field: 'phone',
  },
  fax: {
    type: DataTypes.STRING(24),
    field: 'fax',
  },
}, {
  tableName: 'customers',
  timestamps: false,
});

module.exports = Customer



