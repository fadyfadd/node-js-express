const express = require('express')
const app = express();

const orderRouter = require('./routes/order')
const customerRouter = require('./routes/customer')

app.use('/order' ,orderRouter);
app.use('/customer' , customerRouter)
 

app.listen(8081)