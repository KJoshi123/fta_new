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
                if(data == ""){
                    console.log(`No data found for user = ${userid}`);
                    res.send({
                        "statuscode" : 404,
                        "message" : "data not found",
                        "data" : null
                    })
                }
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

    app.post("/api/saveexercise",function(req,res){
        console.log("into api save exercise")
        console.log(req.body);
        try{
            fteexedte(req.body).save(function(error,data){
                if(error) throw error;
                console.log('save success')
            });
            console.log("out of api save exercise")
            res.send({
                "statuscode" : 200,
                "message" : "success"
            });
        }
        catch(err){
            console.log(`internal server error ${err}`)
            res.send({
                "statuscode" : 500,
                "message" : `internal server error`
            });
        }
        
    })
}