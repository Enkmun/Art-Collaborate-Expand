const sequelize = require('../config/connection');
const seedPortfolio = require('./portfolioData');
const seedArtwork = require('./artworkData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPortfolio();

  await seedArtwork();

  process.exit(0);
};

seedAll();