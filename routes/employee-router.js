const express = require('express')
const router = express.Router()
const {getAllEmpoyees} = require('../business-layers/employee-business-layer')

router.get('/all' , async (req , resp , next)=>{   
    resp.status(200)
    resp.send('no implemented')
})


module.exports = router
