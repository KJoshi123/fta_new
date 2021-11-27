const mongoose = require('mongoose')
const schema = mongoose.Schema;

const fteexedteSchma = new schema({
    name:{type : String}, //name of the exercise
    measureType:{type : String}, // sec for timebased and rep for repetation based
    count:{type : Number}, //count
    createdOn:{type : Date}, //createdon date
    createdBy:{type : Number}, //userid
    updatedOn:{type : Date}, //if updated
    updatedBy:{type : Number}, //userid
    userid:{type : Number} //userid
});

const exelist = mongoose.model('exelist',fteexedteSchma);

module.exports = exelist;