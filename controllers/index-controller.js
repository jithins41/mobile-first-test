const { login, signup, button_login, button_signup } = require('../extras/form-elements');
const { doSignup, findUserIdDuplication, doLogin, updateUserType } = require('../helpers/user-helper');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../configurations/constants');
const { token } = require('morgan');
module.exports.loadSignupPage = (req, res, next) => {
    res.render('sign-up', { formElements: signup, button: button_signup, title: 'Signup', action: '/sign-up' });
}

module.exports.loadLoginPage = (req, res, next) => {
    res.render('login', { formElements: login, button: button_login, title: 'Login', action: '/login' });
}

module.exports.processSignup = async (req, res, next) => {
    let isExist = await findUserIdDuplication(req.body.username)
    if (isExist) {
        res.json({ message: "Username already exist" })
    }
    else {
        doSignup(req.body).then((response) => {
            res.json(response);
        })
    }
}

module.exports.processLogin = (req, res, next) => {
    let { username, password } = req.body;
    console.log(req.body)
    if (username == undefined || password == undefined) {
        res.json({ message: "Authentication failed" });
        return;
    }
    doLogin(username, password).then((response) => {
        console.log(response)
        if (response?.status != undefined) {
            let resp = {
                username: response.user.username,
                name: response.user.name,
                city: response.user.city,
                qualifications: response.user.qualifications,
                usertype: response.user.usertype,
            }
            let token = jwt.sign(resp, TOKEN_SECRET, { expiresIn: 1 * 24 * 60 * 60 });
            req.session.token = token;
            req.session.homeSession = resp;
            res.status(200).json({ status: true, token, user: resp })
        }
        else {
            res.status(200).json(response)
        }
    })
}
module.exports.processLogOut = (req, res, next) => {
    req.session.destroy();
    const token = jwt.sign('', TOKEN_SECRET);
    res.redirect('/login')
}

module.exports.processUpdateUsertype = (req, res, next) => {
    let { username, usertype } = req.body
    updateUserType(username, usertype).then((response) => {
        res.json(response);
    })
}