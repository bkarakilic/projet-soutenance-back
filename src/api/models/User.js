module.exports = (sequelize, DataTypes) => {
    const Utilisateur = sequelize.define('Utilisateur', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nom: DataTypes.STRING(50),
      prenom: DataTypes.STRING(40),
      login: DataTypes.STRING(50),
      mdp: DataTypes.STRING(30),
      idType: DataTypes.INTEGER,
    }, { charset: 'latin1', engine: 'MyISAM' });
    return Utilisateur;
  };