const Order = require('../models/order')

const getAllOrders = async ()=> {

 

    const orders = await Order.findAll();
    return orders;
};

module.exports = {getAllOrders}