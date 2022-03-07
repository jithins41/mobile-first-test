const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    qualification: String,
    city: String,
    phone: String,
    usertype: String,

})

module.exports = model('User', userSchema);