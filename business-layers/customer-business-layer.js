const Customer = require('../models/customer');
const Order = require('../models/order');
const OrderDetail = require('../models/order-detail');
const Product = require('../models/product');

const getAllCustomers = async () => {
    const customers = await Customer.findAll({ include: [{ model: Order, include: [{ model: OrderDetail, include: [{ model: Product }] }] }] });
    return customers;
};

module.exports = { getAllCustomers }