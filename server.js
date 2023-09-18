const express = require('express');
const cors = require('cors');
const router = require('./src/api/routes');
require('dotenv').config({ path: './.env.local' });
const database = require('./utils/Database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

database.authenticate();

app.get('/', (req, res) => {
  res.send("Bienvenue sur l'api Absmedic")
});

app.use('/', router);


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});