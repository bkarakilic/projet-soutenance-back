module.exports = (sequelize, DataTypes) => {
    const LigneFraisHorsForfait = sequelize.define('LigneFraisHorsForfait', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      visiteur: DataTypes.INTEGER,
      prestation: DataTypes.STRING(100),
      datePresta: DataTypes.STRING(20),
      montant: DataTypes.FLOAT(8,2),
      facture: DataTypes.STRING(800),
    }, { charset: 'latin1' });
    return LigneFraisHorsForfait;
  };