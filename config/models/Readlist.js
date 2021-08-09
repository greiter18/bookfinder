const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadlistSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  book_id: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  },
  rating: {
    type: Schema.Types.ObjectId,
    required: false
  }
})



const Readlist = mongose.model('readlist', ReadlistSchema);

module.exports = Readlist;