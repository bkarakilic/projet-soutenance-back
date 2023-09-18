const express = require('express');
const router = express.Router();
const congesController = require('../../controllers/Conges/congesControllers');
const VerifiyToken = require('../../middlewares/VerifiyToken');

router.get('/conges', VerifiyToken, congesController.getConges);


module.exports = router;