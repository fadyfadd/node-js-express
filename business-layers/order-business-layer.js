const Customer = require('../models/customer');
const Order = require('../models/order');
const OrderDetail = require('../models/order-detail');

const getAllOrders = async () => {

    const orders = await Order.findAll({ include: [{ model: Customer } , {model:OrderDetail}] });
    return orders;
};

module.exports = { getAllOrders }