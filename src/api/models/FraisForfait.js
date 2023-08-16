module.exports = (sequelize, DataTypes) => {
    const FraisForfait = sequelize.define('FraisForfait', {
      id: { type: DataTypes.CHAR(3), primaryKey: true },
      libelle: DataTypes.CHAR(20),
      montant: DataTypes.DECIMAL(5,2),
    }, { charset: 'latin1' });
    return FraisForfait;
  };
  