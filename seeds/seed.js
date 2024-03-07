const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedProduct = require('./productData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedProduct();

    process.exit(0);
};

seedAll();