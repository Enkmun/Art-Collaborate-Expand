const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    // Create a new user in the database with the provided information
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Save session information indicating the user is logged in
    req.session.save(() => {
      req.session.loggedIn = true;

      // Respond with the created user data
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    // If an error occurs, log it and send a 500 status with the error
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    // Find the user in the database based on the provided email
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // If the user doesn't exist, respond with an error message
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Check if the provided password matches the user's password
    const validPassword = await dbUserData.checkPassword(req.body.password);

    // If the password is incorrect, respond with an error message
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Save session information indicating the user is logged in
    req.session.save(() => {
      req.session.loggedIn = true;

      // Respond with the logged-in user data and a success message
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    // If an error occurs, log it and send a 500 status with the error
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // Check if the user is logged in
  if (req.session.loggedIn) {
    // If logged in, destroy the session and respond with a success status
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    // If not logged in, respond with a 404 status
    res.status(404).end();
  }
});

module.exports = router;
