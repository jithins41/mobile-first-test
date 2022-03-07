const { login, signup, button_login, button_signup } = require('../extras/form-elements');
const { doSignup, findUserIdDuplication } = require('../helpers/user-helper');

module.exports.loadSignupPage = (req, res, next) => {
    res.render('form', { formElements: signup, button: button_signup, title: 'Signup', action: '/sign-up' });
}

module.exports.loadLoginPage = (req, res, next) => {
    res.render('form', { formElements: login, button: button_login, title: 'Login', action: '/login' });
}

module.exports.processSignup = (req, res, next) => {
    
    findUserIdDuplication(req.body.username).then((response) => {
        if (response) {
            res.json({ message: "Username already exist" })
        }
        else {
            return doSignup(req.body)
        }
    }).then((response) => {
        res.json(response);
    })


    doSignup(req.body).then((response) => {
        res.status(200).json(response);
    })
}

module.exports.processLogin = (req,res,next)=>{
    let data = req.body
}