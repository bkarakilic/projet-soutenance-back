const express = require('express');
const router = express.Router();
const congesController = require('../controllers/congesControllers');
const VerifiyToken = require('../middlewares/VerifiyToken');

router.get('/conges', VerifiyToken, congesController.getConges);
router.post('/conges/add', VerifiyToken, congesController.addConges);


module.exports = router;