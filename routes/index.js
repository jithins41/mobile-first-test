var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/index-controller');

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.redirect('/login')
// });

// router.get('/sign-up', IndexController.loadSignupPage);
// router.get('/login', IndexController.loadLoginPage);

router.post('/sign-up', IndexController.processSignup);
router.post('/login', IndexController.processLogin);

router.get('/logout', IndexController.processLogOut);

router.post('/update-usertype', IndexController.processUpdateUsertype);


module.exports = router;
