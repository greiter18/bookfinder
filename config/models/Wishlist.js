const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  book_id: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  }
})



const Wishlist = mongoose.model('wishlist', WishlistSchema);

module.exports = Wishlist;