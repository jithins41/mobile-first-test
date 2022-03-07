const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../configurations/constants');




module.exports.verifyLogin = (req, res, next) => {
    let auth = req.session.token;

    if (auth == undefined) {
        res.status(401).json({ message: 'No token provided' })
    }
    else {
       
        jwt.verify(auth, TOKEN_SECRET, (error, data) => {
            if (error) {
                console.log(error)
            }
            else {
                next()
            }
        })

    }


}
module.exports.loadHome = (req, res, next) => {

    res.json({ message: 'Authentication Success', user: req.session.homeSession })
}