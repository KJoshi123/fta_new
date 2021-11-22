require('dotenv').config({path: __dirname + '/.env'});
const express = require('express')
const dbObject = require('./config/dbconnect')
const bodyparser = require("body-parser")
const listDetails = require("./api/getListDetails");


const app = express()
//Creating datbase connection
console.log("Trying to connect db")
dbObject(process.env.MONGODB_URL)



//Creating application server
const PORT = process.env.PORT_NUMBER || 5000;
app.listen(PORT, () => {
    console.log(`Application started at port ${PORT}`);
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))



//defining apis
//app.use('/api/getList', require('./api/getListDetails'));

app.get("/api/getList", async (req,res) => {
    console.log("Inside getList API");
    const userid = req.query.userid;
    
    const data =  await listDetails.getListDetails(userid);
    
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(data));
})