const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    firstname : {type: String},
    lastname : {type : String},
    age : {type : Number},
    email : {type : String},
    password : {type : String},
}, {timestamps : true});

const user = mongoose.model('user',userSchema);

module.exports = user;