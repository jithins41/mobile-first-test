const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../configurations/constants');
const fs = require('fs');
module.exports.verifyLogin = (req, res, next) => {
    let auth = req.session.token
    if (auth == undefined) {
        res.status(401).json({ message: "Authentication failed" })
    }
    else {

        jwt.verify(auth, TOKEN_SECRET, (error) => {
            if (error) {
                res.status(500).json({ message: "Authentication failed" })
            }
            else {

                next()
            }
        })

    }
}


module.exports.loadUserHome = (req, res, next) => {


    let files = [];
    try {
        files = fs.readdirSync('./public/images');
    }
    catch {
    }
   
    res.status(200).json({ user: req.session.homeSession, files });
}

