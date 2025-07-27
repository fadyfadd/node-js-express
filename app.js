const express = require('express')
const app = express();
const path = require('path')


const envFileName = `.env.${process.env.NODE_ENV}`

require('dotenv').config({
  path: envFileName
});

const Customer = require('./models/customer')
const Order = require('./models/order')
const Employee = require('./models/employee')
const Territory = require('./models/territory')
const EmployeeTerritory = require('./models/employee_territory')

const orderRouter = require('./routes/order-route')
const customerRouter = require('./routes/customer-route')
const employeeRouter = require('./routes/employee-router');


app.use('/order', orderRouter);
app.use('/customer', customerRouter)
app.use('/employee', employeeRouter)


require('./models/initRelations')({ Customer, Order, Employee, Territory, EmployeeTerritory });
app.listen(8081)