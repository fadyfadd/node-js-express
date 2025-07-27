const Customer = require('../models/customer');
const Order = require('../models/order')

const getAllOrders = async () => {

    const orders = await Order.findAll({ include: [{ model: Customer }] });
    return orders;
};

module.exports = { getAllOrders }