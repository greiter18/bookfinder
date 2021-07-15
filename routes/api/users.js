const express = require("express");
const router = express.Router();// router object off of router
const bcrypt = require('bcryptjs');
const User = require('../../config/models/User');

//where we add routes

//tester route
router.get("/test", (req, res) => {
  res.json({ msg: "This is the users route" });
});

router.post('/register', (req, res) => {
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ username: req.body.username })
  .then(user => {
    if (user) {
      // Throw a 400 error if the username address already exists
      return res.status(400).json({username: "A user has already registered with this username"})
    }
  })
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        // Otherwise create a new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })
          // bcrypt to salt and hash our new user's password 
          //before storing it in the database and saving the user 
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

module.exports = router;