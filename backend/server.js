const express = require('express');
require('dotenv').config({path:'.env'});
const ConnectToDb = require('./config/Database');
const userRoute = require('./routes/UserRoute');

const app = express();
app.use(express.json());

ConnectToDb();
app.use('/api/v1/users',userRoute);

app.listen(process.env.PORT,()=>{
    console.log('Server Started.....');
});