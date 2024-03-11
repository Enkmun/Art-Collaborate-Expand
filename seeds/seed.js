const sequelize = require('../config/connection');
const { User, Product, Collaborate } = require('../models');
const userData = require('./userData');
const productData = require('./productData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData);
    const products = await Product.bulkCreate(productData);
    
   for (let 1 = 0; 1 < 7; 1++); {
    const {RandomUser} = userData[Math.floor(math.random()*userData.length)]};
    for (let 1=0; 1 < 8; 1++); {
    const {RandomProduct} = productData[Math.floor(math.random()*productData.length)]};

    await Collaborate.create({
        User: RandomUser,
        Product: RandomProduct}).catch((err) => {console.log(err);
        })

    process.exit(0);
};

seedAll();