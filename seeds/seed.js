const sequelize = require('../config/connection');
const { User, Product, Collaborate } = require('../models');
const userData = require('./userData');
const productData = require('./productData');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        
        // Create users and products
        const users = await User.bulkCreate(userData);
        const products = await Product.bulkCreate(productData);
        
        // Create collaborations
        for (let i = 0; i < 7; i++) {
            const RandomUser = users[Math.floor(Math.random() * users.length)];
            const RandomProduct = products[Math.floor(Math.random() * products.length)];
            
            await Collaborate.create({
                UserId: RandomUser.id, 
                ProductId: RandomProduct.id
            });
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedAll();
