var express = require('express');
var router = express.Router();
const AdminController = require('../controllers/admin-controller');

router.get('/', AdminController.verifyLogin, AdminController.loadAdminHome);
router.post('/upload-photo', AdminController.verifyLogin, AdminController.processUploadPhoto);

module.exports = router;
