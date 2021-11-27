const fteexedte = require('../models/fteexedte');
const mongoose = require('mongoose')


module.exports = function(app){

    app.get("/",function(req,res){
        console.log("inside base url");
        res.send({
            "data" : "welcome to application"
        })
    });

    app.get("/api/getList",function(req,res){
        console.log("inside getlist api");
        const userid = req.query.userid;
        console.log("calling database to get result");
        try{
            fteexedte.find({userid : userid},(error,data) => {
                console.log(`data received \n ${data}`);
                if(error) throw error;
                if(!data){
                    console.log(`No data found for user = ${userid}`);
                    return returnObject;
                }
                //return details
                // data.forEach( (item) => {
                //     returnObject.push(item);
                // })
                console.log("out of getlist api");
                res.send({
                    "statuscode" : 200,
                    "message" : "success",
                    "data" : data
                })
            });
        }
        catch(execption){
            console.log(`error in getlist api ${exeception}`)
            res.send({
                "statuscode" : 500,
                "message" : "internal server error",
                "data" : null
            })
        }
    });
}