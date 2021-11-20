const router = require('express').Router();
const fteexedte = require('../models/fteexedte');


router.get('/', (req, res) =>{
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
});

module.exports = router