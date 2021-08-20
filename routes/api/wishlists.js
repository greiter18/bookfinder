const express = require("express");
const router = express.Router();
const passport = require("passport");
const Wishlist = require("../../config/models/Wishlist");

router.post("/",
passport.authenticate("jwt", { session: false }),
(req, res) => {
  debugger
  Wishlist.findOne({name: req.body.name})
  .then(name => {
    if(name){
    } else {
      const newWishlist = new Wishlist({
      user: req.user.id,
      bookId: req.body.id
      })
      newWishlist.save()
      .then(wishlist => res.json(wishlist))
    }
  })
})

module.exports = router;
