const express = require('express')
const app = express();

const orderRouter = require('./routes/order-route')
const customerRouter = require('./routes/customer-route')

app.use('/order' ,orderRouter);
app.use('/customer' , customerRouter)
 

app.listen(8081)