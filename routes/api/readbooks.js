const express = require('express');
const router = express.Router();
const passport = require('passport');
const ReadBook = require('../../config/models/Readbook')

router.get("/user/:user_id",
passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log('user iddddddd',req.params.user_id)
    // console.log('paramsssssss',req.params)
    ReadBook
    .find({ user_id: req.params.user_id})
    .then((readbooks) => res.json(readbooks))
    .catch((err) => res.status(400).json(err))
  }
);

router.post("/",
passport.authenticate("jwt", {session: false}),
  (req, res) => {
    debugger
    console.log('readbok req-------',req.body)
    const newReadbook = new ReadBook({
      user_id: req.user.id,
      book_id: req.body.bookId,
      title: req.body.title,
      author: req.body.author,
      link: req.body.link,
      image: req.body.image,
      rating: 0,
      comment: ''
    })
    newReadbook.save()
    .then(readbook => {
      debugger
      console.log('readbook response',readbook)
      return res.json(readbook);
    })
  }
);

router.delete("/:readbook_id",
passport.authenticate("jwt", { session: false}),
(req, res) => {
  console.log('readbook_id:',req.params.readbook_id)
  ReadBook.findByIdAndRemove(req.params.readbook_id)
  .then((readbook) => {
    return res.json(readbook)
  })
  .catch(err => res.status(400).json(err))
}
)

module.exports = router;