const express = require('express');
const authRoutes = require('./Authentifications/AuthRoutes');
const userRoutes = require('./Users/usersRoutes');
const congesRoutes = require('./Conges/congesRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use(userRoutes);
router.use(congesRoutes);

module.exports = router;