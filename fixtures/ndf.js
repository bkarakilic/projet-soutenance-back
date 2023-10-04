const Sequelize = require('sequelize');
const database = require('../utils/Database');
const Ndf = require('../src/api/models/Ndf.js')(database.sequelize, Sequelize.DataTypes);

const ndfs = [
  {
    justificatif: 'Facture repas',
    intitulé: "Repas d'affaires",
    montant: 45.50,
    user_email: 'lapointe@gmail.com',
    status: 'En attente',
    commentaire: 'Repas avec client XYZ'
  },
  {
    justificatif: 'Ticket de métro',
    intitulé: 'Déplacement professionnel',
    montant: 2.00,
    user_email: 'philippe@gmail.com',
    status: 'En attente',
  },
];

async function insertNdf(item) {
  return Ndf.create(item);
}

async function generateNdfs() {
  for (const item of ndfs) {
    await insertNdf(item);
  }
  console.log('Ndfs insérés avec succès');
}

generateNdfs().catch(error => console.error(error));
