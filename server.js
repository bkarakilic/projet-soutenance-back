const express = require('express');
const sequelize = require('./db/connexion');
const cors = require('cors');
const router = require('./src/api/routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});