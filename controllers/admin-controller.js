const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../configurations/constants');
const { moveFile, isDirExist } = require('../helpers/user-helper');
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


module.exports.loadAdminHome = (req, res, next) => {
    res.status(200).json({ user: req.session.homeSession });
}

module.exports.processUploadPhoto = (req, res, next) => {
    let file = req.files.photo;
    let dirName = './public/images/';
    isDirExist(dirName).then(() => {
        return moveFile(file, dirName)
    })
        .then(() => {
            res.status(200).json({ status: true, message: "Image uploaded succesfully" });
        })
}