const mongoose = require('mongoose')
const schema = mongoose.Schema;

const fteexedteSchma = new schema({
    name:{type : String},
    measureType:{type : String},
    count:{type : Number},
    createdOn:{type : Date},
    createdBy:{type : Number},
    updatedOn:{type : Date},
    updatedBy:{type : Number},
    userid:{type : Number}
});

const exelist = mongoose.model('exelist',fteexedteSchma);

module.exports = exelist;