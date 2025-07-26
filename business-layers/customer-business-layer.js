const Customer  = require('../models/customer');
const Order = require('../models/order');

const getAllCustomers = async ()=> {
    const customers = await Customer.findAll({include:[{model:Order}]});
    return customers;
};

module.exports = {getAllCustomers}