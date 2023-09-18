const { sequelize } = require('../utils/Database'); 

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); 
    console.log('La base de données a été synchronisée.');
  } catch (error) {
    console.error('Erreur lors de la synchronisation de la base de données:', error);
  }
}

syncDatabase();