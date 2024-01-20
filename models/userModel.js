const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
    username: String,
    password: String,
    email: String,
    phone: Number,
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;