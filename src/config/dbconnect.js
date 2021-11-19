const mongoose = require('mongoose')

module.exports = function() {
    var dbConnectionString = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.8zzqt.mongodb.net/fta_db?retryWrites=true&w=majority'
    mongoose.connect(dbConnectionString, { useNewUrlParser : true, useUnifiedTopology:true})
    .then((val) => {
        //starting port
    }).catch((err) => console.log(err));
    console.log('Connected with database');
}