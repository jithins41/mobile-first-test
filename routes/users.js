var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user-controller');

router.get('/', UserController.verifyLogin, UserController.loadUserHome);

module.exports = router;
