const database = require('../utils/Database'); // Mettez à jour le chemin vers votre fichier Database

async function deleteAllUsers() {
  try {
    await database.User.destroy({ where: {} });
    console.log('Tous les utilisateurs ont été supprimés avec succès.');
  } catch (error) {
    console.error('Une erreur est survenue lors de la suppression des utilisateurs:', error);
  }
}

deleteAllUsers();