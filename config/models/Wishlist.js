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
  /*  user_id: {
    type: String,
     ref: 'users'
   },
    book_title: {
     type: String,
   }
   book_author: {
     type: String,
   }
  book_id: {
    type: String,
    ref: 'books' // confirm if this is correct???
  },
  book_image: {
    type: String
  }
  book_link: {
    type: String
  }
  */
})

const Wishlist = mongoose.model('wishlist', WishlistSchema);
module.exports = Wishlist;