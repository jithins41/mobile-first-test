var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/index-controller');
/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/sign-up', IndexController.loadSignupPage);
router.get('/login', IndexController.loadLoginPage);



module.exports = router;
