module.exports = (sequelize, DataTypes) => {
    const LigneFraisForfait = sequelize.define('LigneFraisForfait', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      idVisiteur: DataTypes.STRING(5),
      mois: DataTypes.STRING(20),
      idFraisForfait: DataTypes.STRING(5),
      quantite: DataTypes.INTEGER,
    }, { charset: 'latin1' });
    return LigneFraisForfait;
  };