const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
    fullname:String,
    username: String,
    password: String,
    
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;