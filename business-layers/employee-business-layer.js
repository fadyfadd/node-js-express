const Employee = require("../models/employee");
const Territory = require("../models/territory");


const getAllEmpoyees = async () => {
  const employees = await Employee.findAll({ include: [{ model: Territory, through: { attributes: ['remarks'] } }] });
  return employees
};

module.exports = { getAllEmpoyees }