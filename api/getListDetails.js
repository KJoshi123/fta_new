const fteexedte = require('../models/fteexedte');


/*router.get('/', (req, res) =>{
    console.log('Inside getListDetails api');

    //get user id from request
    const userid = req.query.userid;
    console.log(`request user id : ${userid}`);

    //call database to get details
     fteexedte.find({userid : userid}, (error,data) => {
        console.log(`data received \n ${data}`);
        const returnObject = [];
        const dataobj = [];
        if(error) throw error;
        if(!data){
            console.log(`No data found for user = ${userid}`);
            returnObject.json({statusCode : 404});
            returnObject.json({message : `No data found for user = ${userid}`});
            returnObject.json({data : null});
            res.json({responseData : returnObject})
        }
        //return details
        returnObject.json({statusCode : 200});
        returnObject.json({message : `SUCCESS`});
        data.forEach( (item) => {
            dataobj.push(item);
        })
        returnObject.json({data : dataobj});
        console.log("Out of getListDetails api")
        res.json({responseData : returnObject});
    });

    //Trying to send sample response
    const returnString = "sample return output";
    res.set("Name","kaustubh")
    console.log("Out of getListDetails API")
    return returnString;
});*/


async function getListDetails(userid){
    console.log(`Inside getListDetails api service for user id ${userid}`);
    const responseObject = []
    const returnObject = []
    fteexedte.find({userid : userid}, async (error,data) => {
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