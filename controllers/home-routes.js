const router = require('express').Router();
const { Portfolio, Artwork } = require('../models');
const withAuth = require('../utils/auth');

// get all portfolios for a loggedIn user
router.get('/', async (req, res) => {
  try {
    const portfolioData = await Portfolio.findAll({
      include: [
        {
          model: Artwork,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const portfolios = portfolioData.map((portfolio) =>
      portfolio.get({ plain: true })
    );

    res.render('homepage', {
      portfolios,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one portfolio for a loggedIn user
router.get('/portfolio/:id', withAuth, async (req, res) => {
  try {
    const portfolioData = await Portfolio.findByPk(req.params.id, {
      include: [
        {
          model: Artwork,
          attributes: [
            'id',
            'title',
            'artist_username',
            'filename',
            'description',
          ],
        },
      ],
    });

    const portfolio = portfolioData.get({ plain: true });
    res.render('portfolio', {
      portfolio,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one artwork for a loggedIn user
router.get('/artwork/:id', withAuth, async (req, res) => {
  try {
    const artworkData = await Artwork.findByPk(req.params.id);

    const artwork = artworkData.get({ plain: true });

    res.render('artwork', {
      artwork,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;