module.exports = ({ Customer, Order }) => { 
  Customer.hasMany(Order, { foreignKey: 'customer_id' });
  Order.belongsTo(Customer, { foreignKey: 'customer_id' }); 
};