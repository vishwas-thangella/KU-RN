const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,'Name is required !']
    },
    Email:{
        type:String,
        required:[true,'Email is required !']
    },
    Password:{
        type:String,
        required:[true,'Password is required !']
    }
});

module.exports = mongoose.model('users',UserSchema);