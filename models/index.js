const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },

    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define semua moduls yang ada pada aplikasi semua tabel atau content
db.quizzes = require('./quiz')(sequelize,Sequelize);
db.kata = require('./kata')(sequelize,Sequelize);
module.exports = db;

