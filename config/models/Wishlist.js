const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  }
})



const Wishlist = mongose.model('wishlist', WishlistSchema);

module.exports = Wishlist;