const Promise = require('promise');
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

module.exports.findUserIdDuplication = function (userId) {
    console.log(userId)
    return new Promise((resolve, reject) => {
        User.findOne().then((response) => {

            if (response) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        })
    })
}


module.exports.doSignup = async function (userData) {
    console.log(userData)
    userData.password = await bcrypt.hash(userData.password, 10);
    return new Promise((resolve, reject) => {
        let user = new User(userData);
        user.save().then(() => {
            resolve({ status: true, message: "User created succesfully" });
        })
    })
}