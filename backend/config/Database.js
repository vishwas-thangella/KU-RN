const mongoose = require('mongoose');

const ConnectToDb = async () =>{
    await mongoose.connect(process.env.MONGO_URI).then(resp=>{
        console.log(`DB connected to ${resp.connection.host}`);
    }).catch(err=>{
        console.log(err);
    })
};

module.exports = ConnectToDb;