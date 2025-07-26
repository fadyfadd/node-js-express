const express = require('express')
const app = express();
const Customer = require('./models/customer')
const Order = require('./models/order')


const orderRouter = require('./routes/order-route')
const customerRouter = require('./routes/customer-route')

app.use('/order' ,orderRouter);
app.use('/customer' , customerRouter)
 
const initRelations = require('./models/initRelations')({Customer , Order});
app.listen(8081)