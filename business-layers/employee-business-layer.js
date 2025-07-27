const Employee = require("../models/employee");

 
const getAllEmpoyees = async ()=> {
  const employees = await Employee.findAll();
  return employees
};

module.exports = {getAllEmpoyees}