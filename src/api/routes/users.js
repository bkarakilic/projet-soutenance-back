const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usersControllers');
const VerifiyToken = require('../middlewares/VerifiyToken');

router.get('/profil', VerifiyToken, UserController.getProfil);
router.put('/profil', VerifiyToken, UserController.updateProfil);


module.exports = router;