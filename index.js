require('dotenv').config({path: __dirname + '/.env'});
const express = require('express')
const dbObject = require('./config/dbconnect')
const bodyparser = require("body-parser")
const listDetails = require("./api/getListDetails");
const exelistcontroller = require('./controllers/exelistcontroller');


const app = express()
//Creating datbase connection
console.log("Trying to connect db")
dbObject(process.env.MONGODB_URL)



//Creating application server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Application started at port ${PORT}`);
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))



//defining apis
//app.use('/api/getList', require('./api/getListDetails'));

/*app.get("/api/getList",(req,res) => {
    console.log("Inside getList API");
    const userid = req.query.userid;
    const data = [];

    listDetails.getListDetails(userid)
    .then(function(value){
        data.push(...value);
        console.log(`data from api ${value}`);
    }).catch(function(value){
        console.log(`error from api ${value}`);
    });
    
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(data));
})*/

exelistcontroller(app);