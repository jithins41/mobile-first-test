const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../configurations/constants');
const { moveFile, isDirExist } = require('../helpers/user-helper');
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


module.exports.loadAdminHome = (req, res, next) => {
    res.render('home', { user: req.session.homeSession });
}

module.exports.processUploadPhoto = (req, res, next) => {
    let file = req.files.photo;
    let dirName = './public/images/';
    isDirExist(dirName).then(() => {
        return moveFile(file, dirName)
    })
        .then(() => {
            res.redirect('/admin');
        })
}