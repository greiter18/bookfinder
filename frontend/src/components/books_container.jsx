import { connect } from 'react-redux';
import { receiveAllBooks } from '../actions/books_action';
import { withRouter } from 'react-router';
import HomePage from './homePage';
import add_Book from '../actions/wishlist_action'

const mstp = state => ({
  books: state.books
})

const mdtp = dispatch => ({
  add_book: book => dispatch(add_book(book))
})

export default withRouter(connect(mstp, mdtp)(HomePage));