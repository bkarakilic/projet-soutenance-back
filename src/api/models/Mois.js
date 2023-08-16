module.exports = (sequelize, DataTypes) => {
    const Mois = sequelize.define('Mois', {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      lemois: DataTypes.STRING(20),
    }, { charset: 'latin1', engine: 'MyISAM' });
    return Mois;
  };