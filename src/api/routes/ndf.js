const express = require('express');
const router = express.Router();
const VerifiyToken = require('../middlewares/VerifiyToken');
const ndfControllers = require('../controllers/ndfControllers');

router.get('/ndf', VerifiyToken, ndfControllers.getNdf);
// router.post('/ndf/add', VerifiyToken, ndfControllers.addConges);


module.exports = router;