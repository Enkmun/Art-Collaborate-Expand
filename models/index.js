const User = require('./User');
const Portfolio = require('./Portfolio');
const Artwork = require('./Artwork');

Portfolio.hasMany(Artwork, {
  foreignKey: 'portfolio_id',
});

Artwork.belongsTo(Portfolio, {
  foreignKey: 'portfolio_id',
});

module.exports = { 
  User, 
  Portfolio, 
  Artwork 
};