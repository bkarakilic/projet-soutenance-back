module.exports = (sequelize, DataTypes) => {
  const Ndf = sequelize.define('Ndf', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    justificatif: {
      type: DataTypes.STRING
    },
    intitulé: {
      type: DataTypes.STRING
    },
    montant: {
      type: DataTypes.FLOAT
    },
    user_email: {
      type: DataTypes.STRING(100),
      validate: {
        isEmail: true
      }
    },
    status: {
      type: DataTypes.STRING(30),
      defaultValue: "En attente"
    },
    date_modification: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    commentaire: {
      type: DataTypes.TEXT,
      defaultValue: null
    }
  }, { charset: 'utf8', collate: 'utf8_general_ci', engine: 'InnoDB' });

  return Ndf;
};