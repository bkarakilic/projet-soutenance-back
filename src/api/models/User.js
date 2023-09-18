const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nom: DataTypes.STRING(50),
    prenom: DataTypes.STRING(40),
    email: { type: DataTypes.STRING(100), unique: true },
    login: { type: DataTypes.STRING(50), unique: true },
    mdp: DataTypes.TEXT,
    roles: DataTypes.STRING,
    civilite: DataTypes.STRING(55),
    adresse: DataTypes.TEXT, 
    ville: DataTypes.STRING(100),
    codePostal: DataTypes.STRING(20) 
  }, { charset: 'utf8', collate: 'utf8_general_ci', engine: 'InnoDB' });

  return User;
};