const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadlistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  },
  review: {
    type: Schema.Types.ObjectId,
    required: false
  }
})



const Readlist = mongose.model('readlist', ReadlistSchema);

module.exports = Readlist;