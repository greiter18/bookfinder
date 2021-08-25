const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  user_id: {
    type: String,
    ref: 'users'
  },
  book_id: {
    type: String,
    ref: 'books' // confirm if this is correct???
  }
})

const Wishlist = mongoose.model('wishlist', WishlistSchema);
module.exports = Wishlist;