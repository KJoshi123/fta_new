const mongoose = require('mongoose')


module.exports = function(dbConnectionString) {
    mongoose.connect(dbConnectionString, { useNewUrlParser : true, useUnifiedTopology:true})
    const connection = mongoose.connection;
    try{
        connection.once('open',() => {
            console.log('Connected with database');
        });
    }
    catch(exception){
        console.error("db connection error");
    }
    
}