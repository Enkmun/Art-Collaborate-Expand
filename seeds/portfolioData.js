const { Portfolio } = require('../models');

const portfolioData = [
  {
    portfolio_name: 'Jack\'s Portfolio',
  },
  {
    portfolio_name: 'Amanda\'s Portfolio',
  },
  {
    portfolio_name: 'Sarah\'s Portfolio',
  },
  {
    portfolio_name: 'Thomas\'s Portfolio',
  },
  {
    portfolio_name: 'Max\'s Portfolio',
  },
  {
    portfolio_name: 'Anna\'s Portfolio',
  },
  {
    portfolio_name: 'Lori\'s Portfolio',
  },
];

const seedPortfolio = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolio;