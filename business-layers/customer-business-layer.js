const Customer = require('../models/customer');
const Order = require('../models/order');
const OrderDetail = require('../models/order-detail');

const getAllCustomers = async () => {
    const customers = await Customer.findAll({ include: [{ model: Order , include:[{model:OrderDetail}] }] });
    return customers;
};

module.exports = { getAllCustomers }