const Sequelize = require('sequelize');
const database = require('../utils/Database');
const Conges = require('../src/api/models/Conges.js')(database.sequelize, Sequelize.DataTypes);

const conges = [
  { email_user: 'lapointe@gmail.com', type_conges: 'CP', date_debut: '2023-10-01', date_fin: '2023-10-15', raison: 'Vacances annuelles', nbConges: '10', status: 'En attente'},
  { email_user: 'philippe@gmail.com', type_conges: 'CP Sans solde', date_debut: '2023-11-01', date_fin: '2023-11-10', raison: 'Chirurgie', nbConges: '5', status: 'Approuvé'},
];

async function insertConges(conge) {
  return Conges.create(conge);
}

async function generateConges() {
  for (const conge of conges) {
    await insertConges(conge);
  }
  console.log('Congés insérés avec succès');
}

generateConges().catch(error => console.error(error));