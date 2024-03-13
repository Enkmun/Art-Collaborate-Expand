const router = require('express').Router();
const { Portfolio, Artwork } = require('../models');

router.get('/', async (req, res) => {
  try {
    const portfolioData = await Portfolio.findAll({
      include: [{ model: Artwork }],
    });

    const portfolios = portfolioData.map((portfolio) => portfolio.get({ plain: true }));

    res.render('portfolio', {
      portfolios,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;