// import dependencies
const User = require('./User');
const Product = require('./Product');
const Collaborate = require('./Collaborate');

// associations
User.belongsToMany(Product, {
  through: {
    model: Collaborate,
    unique: false,
  },
  as: 'collaborations'
});

Product.belongsToMany(User, {
  through: {
    model: Collaborate,
    unique: false,
  },
  as: 'collaborators'
});

// export User
module.exports = { 
    User,
    Product,
    Collaborate 
};