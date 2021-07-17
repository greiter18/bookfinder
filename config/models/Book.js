const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: string,
    required: true
  },
  author: {
    type: string,
    required: true
  },
  image: {
    type: string,
    required: true
  },
  link: {
    type: string,
    required: true
  },
  published: {
    type: integer,
    required: true 
  }
});

const Book = mongose.model('book', BookSchema);

module.exports = Book;