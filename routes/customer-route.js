const express = require('express')
const router = express.Router()
const { getAllCustomers } = require('../business-layers/customer-business-layer')


router.get('/all', async (req, resp, next) => {
    var result = await getAllCustomers();
    resp.status(200).json(result)
})


module.exports = router
