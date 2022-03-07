const Promise = require('promise');
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

module.exports.findUserIdDuplication = function (userId) {
    return new Promise((resolve, reject) => {
        User.findOne({username:userId}).then((response) => {
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
    userData.password = await bcrypt.hash(userData.password, 10);
    return new Promise((resolve, reject) => {
        let user = new User(userData);
        user.save().then(() => {
            resolve({ status: true, message: "User created succesfully" });
        })
    })
}

module.exports.doLogin = function (username, password) {
    return new Promise((resolve, reject) => {
        User.findOne({ username: username }).then(async (response) => {
            if (!response) resolve({ message: 'Invalid username' });
            else {
                isPasswordTrue = await bcrypt.compare(password, response.password)
                if (isPasswordTrue) {
                    resolve({ status: true, message: "Authentication success", user: response });
                }
                else{
                    resolve({ message: 'Invalid password' });
                }
            }
        })
    })
} 