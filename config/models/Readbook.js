const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadbookSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  book_id: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  },
  title: {
    type: String
  },
  author: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  rating: {
    type: Number,
    required: false
  }
})



const Readbook = mongose.model('readbook', ReadbookSchema);

module.exports = Readbook;