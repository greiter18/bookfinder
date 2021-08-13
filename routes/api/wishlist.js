const express = require("express");
const router = express.Router();
const passport = require("passport");
const Wishlist = require("../../config/models/Wishlist");

router.post("/",
passport.authenticate("jwt", { session: false }),
(req, res) => {
  Wishlist.findOne({name: req.body.name})
  .then(name => {
    if(name){
    } else {
      const newwishlist = new Wishlist({
      user: req.user.id,
      id: req.body.id
      })
      newwishlist.save()
      .then(wishlist => res.json(wishlist))
    }
  })
})