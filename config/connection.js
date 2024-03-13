// import dependencies
const Sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
  const Sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  Sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = Sequelize;