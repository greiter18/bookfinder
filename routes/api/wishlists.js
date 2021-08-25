const express = require("express");
const router = express.Router();
const passport = require("passport");
const Wishlist = require("../../config/models/Wishlist");

router.get("/user/:user_id",
passport.authenticate("jwt", { session: false }),
(req, res) => {
  debugger
    Wishlist
      .find({ user_id: req.params.user_id })
      .then((wishlist) => res.json(wishlist))
      .catch((err) => res.status(400).json(err));
  }
);

router.post("/",
passport.authenticate("jwt", {session: false}),
(req, res) => {
  const newWishlist = new Wishlist({
    user_id: req.user.id,
    book_id: req.body.bookId
    })
    newWishlist.save()
    .then(wishlist => res.json(wishlist))
  }
)




module.exports = router;
