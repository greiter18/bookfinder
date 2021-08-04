const express = require("express");
const router = express.Router();// router object off of router
const bcrypt = require('bcryptjs'); // for router
const User = require('../../config/models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require("../../validations/register")
const validateLogIn = require("../../validations/login")

//where we add routes
//tester route
router.get("/test", (req, res) => {
  res.json({ msg: "This is the users route" });
  //res.send("This is the users route" );
});


router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({msg: 'Success'});
})

router.post('/register', (req, res) => {
  debugger
  const { errors, isValid }= validateRegisterInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }
  // Check to make sure nobody has already registered with a duplicate username
  User.findOne({ username: req.body.username })
  .then(user => {
    if (user) {
      // Throw a 400 error if the username address already exists
      return res.status(400).json({username: "A user has already registered with this username"})
    }
  })
   // Check to make sure nobody has already registered with a duplicate email
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
              .then(user => {
                const payload = {id: user.id, username: user.username };
                jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                })
              })
              // .then(user => res.json(user)) // sends back to front end
              .catch(err => console.log(err));
          })
        });

      }
    })
})
//logging in the user
  router.post('/login', (req, res) => {
    const { errors, isValid} = validateLogIn(req.body);

    if (!isValid){
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
//looking for the email
    User.findOne({ email })
      .then(user => {
        if(!user){//if email isnt found then send message
          return res.status(400).json({ email: "This user does not exist."});
        }  //comparing bcrypt password to users password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              const payload = {id: user.id, username: user.username};

              jwt.sign(
                payload,
                keys.secretOrKey,
                // Tell the key to expire in one hour
                {expiresIn: 3600},
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                });
            } else {
              return res.status(400).json({password: 'Incorrect password'});
            }
          })
      })
  })



module.exports = router;