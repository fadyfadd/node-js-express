const express = require('express')
const router = express.Router()

const all_orders = router.get('/all' , (req , resp , next)=>{
    resp.send('all orders middleware')
})

const all_orders_by_customer = router.get('/by-customer/:customerid' , (req , resp , next)=>{
    resp.send('by customoer id middleware')
})



module.exports = router
