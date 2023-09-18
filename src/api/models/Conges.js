const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Conges = sequelize.define('Conges', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email_user: DataTypes.STRING(100),
    type_conges: DataTypes.STRING(50),
    date_debut: { 
        type: DataTypes.DATE,
        allowNull: false
    },
    date_fin: { 
        type: DataTypes.DATE,
        allowNull: false
    },
    raison: DataTypes.TEXT,
    nbConges: DataTypes.STRING(5),
    status: DataTypes.STRING(20),
  }, { charset: 'utf8', collate: 'utf8_general_ci', engine: 'InnoDB' });

  return Conges;
};