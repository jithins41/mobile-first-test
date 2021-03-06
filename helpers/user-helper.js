const Promise = require('promise');
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const sharp = require('sharp');
const fs = require('fs');

module.exports.findUserIdDuplication = function (userId) {
    return new Promise((resolve, reject) => {
        User.findOne({ username: userId }).then((response) => {
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
                else {
                    resolve({ message: 'Invalid password' });
                }
            }
        })
    })
}

module.exports.isDirExist = (dirname) => {
    return new Promise((resolve) => {
        fs.access(dirname, (error) => {
            if (error) {
                fs.mkdirSync(dirname, { recursive: true });
            }
            resolve();
        })
    })
}
module.exports.moveFile = (file, dir) => {
    return new Promise(async (resolve, reject) => {
        await sharp(file.data).toFile(dir + file.name);
        resolve();
    })
}

module.exports.updateUserType = (username, usertype) => {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ username: username }, { $set: { usertype: usertype } }).then(() => {
            resolve({ status: true, message: "Usertype updated succesfully" });
        }).catch((err) => {
            resolve(err);
        })
    })
}