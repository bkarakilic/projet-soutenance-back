const express = require('express');
const auth = require('./auth');
const users = require('./users');
const conges = require('./conges');
const ndf = require('./ndf');

const router = express.Router();

router.use('/auth', auth);
router.use(users);
router.use(conges);
router.use(ndf);

module.exports = router;