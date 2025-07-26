const Customer  = require('../models/customer')

const getAllCustomers = async ()=> {
    const customers = await Customer.findAll();
    return customers;
};

module.exports = {getAllCustomers}