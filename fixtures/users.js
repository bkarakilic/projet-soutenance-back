const Sequelize = require('sequelize');
const database = require('../utils/Database');
const bcrypt = require('bcrypt');
const User = require('../src/api/models/User.js')(database.sequelize, Sequelize.DataTypes);


const users = [
  { nom: 'LAPOINTE', prenom: 'Claire', email: 'lapointe@gmail.com', login: 'lapointe', mdp: 'lapointe_claire', roles: 'employes', civilite: 'Madame', adresse: '8 rue du vallon', ville: 'Lyon', codePostal:  '69000' },
  { nom: 'De', prenom: 'Philippe', email: 'philippe@gmail.com', login: 'philippe', mdp: 'philippe_de', roles: 'comptable', civilite: 'Monsieur', adresse: '8 rue du vallon', ville: 'Lyon', codePostal:  '69000' },
  { nom: 'Gest', prenom: 'Alain', email: 'gest@gmail.com', login: 'Allain', mdp: 'alain_gest', roles: 'employes', civilite: 'Madame', adresse: '8 rue du vallon', ville: 'Lyon', codePostal:  '69000' },
];

async function insertUser(user) {
  const salt = await bcrypt.genSalt(10);
  user.mdp = await bcrypt.hash(user.mdp, salt);
  return User.create(user);
}

async function generateUsers() {
  for (const user of users) {
    await insertUser(user);
  }
  console.log('Utilisateurs insérés avec succès');
}


generateUsers().catch(error => console.error(error));