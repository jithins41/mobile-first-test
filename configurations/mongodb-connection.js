const { connect } = require('mongoose');
const Promise = require('promise');
const { CONNECTION_STRING } = require('./constants');

module.exports.createConnection = () => {
    return new Promise((resolve, reject) => {
        connect(CONNECTION_STRING).then(() => {
            resolve('Database connected succesfully');
        })
            .catch(err => {
                reject(err);
            })
    })
}