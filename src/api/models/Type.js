module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define('Type', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      libelle: DataTypes.STRING(30),
    }, { charset: 'latin1', engine: 'MyISAM' });
    return Type;
  };