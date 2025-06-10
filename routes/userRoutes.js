const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/promote-to-admin', userController.promoteToAdmin);

module.exports = router;
