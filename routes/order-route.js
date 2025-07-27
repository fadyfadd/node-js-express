const express = require('express')
const router = express.Router()
const { getAllOrders } = require('../business-layers/order-business-layer')

router.get('/all', async (req, resp, next) => {

    var result = await getAllOrders();
    resp.status(200).json(result)
})

const all_orders_by_customer = router.get('/by-customer/:customerid', (req, resp, next) => {
    resp.send('by customoer id middleware')
})

module.exports = router
