const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
    fullname:string,
    email: string,
    password: string,
    phone:string
    
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;