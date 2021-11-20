require('dotenv').config({path: __dirname + '/.env'});
const express = require('express')
const dbObject = require('./config/dbconnect')
const app = express()
//Creating datbase connection
console.log("Trying to connect db")
dbObject(process.env.MONGODB_URL)

//defining apis
app.use('/api/getList', require('./api/getListDetails'));

//Creating application server
const PORT = process.env.PORT_NUMBER || 5000;
app.listen(PORT, () => {
    console.log(`Application started at port ${PORT}`);
})
