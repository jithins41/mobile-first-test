const { login, signup, button_login, button_signup } = require('../extras/form-elements');

module.exports.loadSignupPage = (req, res, next) => {
    res.render('form', { formElements: signup, button: button_signup, page: "login" });
}

module.exports.loadLoginPage = (req, res, next) => {
    res.render('form', { formElements: login, button: button_login, page: "signup" });
}