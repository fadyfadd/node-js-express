const express = require('express')
const router = express.Router()
const { getAllEmpoyees } = require('../business-layers/employee-business-layer')

router.get('/all', async (req, resp, next) => {
    var result = await getAllEmpoyees();
    resp.status(200).json(result)
})


module.exports = router
