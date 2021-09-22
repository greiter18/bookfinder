const express = require('express');
const router = express.Router();
const passport = require('passport');
const ReadBook = require('../../config/models/Readbook')

router.get("/user/:user_id",
passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ReadBook
    .find({ user_id: req.params.user_id})
    .then((readbooks) => res.json(readbooks))
    .catch((err) => res.status(400).json(err))
  }
);

router.post("/",
passport.authenticate("jwt", {session: false}),
  (req, res) => {
    const newReadbook = new ReadBook({
      user_id: req.user.id,
      book_id: req.body.bookId,
      title: req.body.title,
      author: req.body.authors,
      link: req.body.link,
      image: req.body.image
    })
    newReadbook.save()
    .then(readbook => {
      return res.json(readbook);
    })
  }
);

router.delete("/:readbook_id",
passport.authenticate("jwt", { session: false}),
(req, res) => {
  ReadBook.findByIdAndRemove(req.params.reabook_id)
  .then((readbook) => {
    return res.json(readbook)
  })
  .catch(err => res.status(400).json(err))
}
)

module.exports = router;