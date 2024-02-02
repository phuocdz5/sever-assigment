const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
    fullname:String,
    email: String,
    password: String,
    phone:String
    
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;