const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/Authentifications/authControllers');

router.post('/login', AuthController.login);

module.exports = router;