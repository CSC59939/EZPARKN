// models/index.js

var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(path.join(__dirname, '..', 'config', 'config.js'))[env]
var db        = {};

config.define = {};
config.define.timestamps = false;
config.operatorsAliases = false;

var sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.users = require('./user')(sequelize, Sequelize);
db.cars = require('./car')(sequelize, Sequelize);

//Relations
db.users.hasOne(db.cars);
db.cars.belongsTo(db.users);

module.exports = db;
