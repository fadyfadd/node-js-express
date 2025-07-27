module.exports = ({ Customer, Order, Employee, Territory, EmployeeTerritory }) => {

  Customer.hasMany(Order, { foreignKey: 'customer_id' });
  Order.belongsTo(Customer, { foreignKey: 'customer_id' });

  Employee.belongsToMany(Territory, {
    through: EmployeeTerritory,
    foreignKey: 'employee_id',
    otherKey: 'territory_id'
  });
  Territory.belongsToMany(Employee, {
    through: EmployeeTerritory,
    foreignKey: 'territory_id',
    otherKey: 'employee_id'
  });



};