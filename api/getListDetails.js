const fteexedte = require('../models/fteexedte');

function getListDetails(userid){
    console.log(`Inside getListDetails api service for user id ${userid}`);
    const responseObject = []
    const returnObject = []
    fteexedte.find({userid : userid},(error,data) => {
        console.log(`data received \n ${data}`);
        
        if(error) throw error;
        if(!data){
            console.log(`No data found for user = ${userid}`);
            return returnObject;
        }
        //return details
        data.forEach( (item) => {
            returnObject.push(item);
        })
    });
    console.log("Out of getListDetails service api")
    responseObject["statusCode"] = 200
    responseObject["message"] = "success"
    responseObject["data"] = returnObject?returnObject:[]
    return responseObject;
}
exports.getListDetails = getListDetails