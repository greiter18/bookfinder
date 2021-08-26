const express = require("express");
const router = express.Router();
const passport = require("passport");
const Wishlist = require("../../config/models/Wishlist");

router.get("/user/:user_id",
passport.authenticate("jwt", { session: false }),
(req, res) => {
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

router.delete("/:wishlist_id",
passport.authenticate("jwt", {session: false}),
(req,res) =>{
  Wishlist.findByIdAndRemove(req.params.wishlist_id)
  .then((wishlists) => {
    return res.json(wishlists)
  })
  .catch(err => res.status(400).json(err));
})

module.exports = router;


//user_id:610d42e0f570748bea5ed04b
//wishlist_id: 6126afe975d0f4ce91557d3b