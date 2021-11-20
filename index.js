require('dotenv').config({path: __dirname + '/.env'});

const dbObject = require('./config/dbconnect')
dbObject(process.env.MONGODB_URL)
