const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../configurations/constants');
const fs = require('fs');
module.exports.verifyLogin = (req, res, next) => {
    let auth = req.session.token
    if (auth == undefined) {
        res.redirect('/login')
    }
    else {

        jwt.verify(auth, TOKEN_SECRET, (error) => {
            if (error) {
                res.redirect('/login')
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
    res.render('home', { user: req.session.homeSession, files });
}

