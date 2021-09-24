const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadbookSchema = new Schema({
  user_id: {
    type: String,
    ref: 'users'
  },
  book_id: {
    type: String,
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
  },
  comment: {
    type: String,
    required: false
  }
})

const Readbook = mongoose.model('readbook', ReadbookSchema);
module.exports = Readbook;