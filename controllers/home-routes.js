const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
  res.render('homepage');
});

// Render the login page.  If the user is logged in, redirect to the home page.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Render the sign up page.  If the user is logged in, redirect to the home page.
router.get('/signup', (req, res) => {
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}

res.render('signup');
});


module.exports = router;