const Customer = require('../models/customer');
const Order = require('../models/order');
const OrderDetail = require('../models/order-detail');
const Product = require('../models/product');

const getAllOrders = async () => {

    const orders = await Order.findAll({ include: [{ model: Customer }, { model: OrderDetail, include: [{ model: Product }] }] });
    return orders;
};

module.exports = { getAllOrders }