const Sequelize = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../src/api/models/User');
const CongesModel = require('../src/api/models/Conges');
const Ndf = require('../src/api/models/Ndf');

class Database {
  constructor() {
    const env = process.env.NODE_ENV || 'development';
    const dbConfig = config[env];
    this.sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
    });
    this.initModels();
  }

  initModels() {
    this.User   = UserModel(this.sequelize, Sequelize.DataTypes);
    this.Conges = CongesModel(this.sequelize, Sequelize.DataTypes);
    this.Ndf    = Ndf(this.sequelize, Sequelize.DataTypes);
  }

  sync() {
    return this.sequelize.sync();
  }

  authenticate() {
    return this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return database.sync();
      })
      .catch(error => {
        console.error('Unable to connect to the database:', error);
        return false;
      });
  }
}


const database = new Database();
module.exports = database;