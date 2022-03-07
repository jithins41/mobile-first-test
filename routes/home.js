var express = require('express');
const HomeController = require('../controllers/home-controller');
var router = express.Router();

router.get('/', HomeController.verifyLogin, HomeController.loadHome);



module.exports = router;
