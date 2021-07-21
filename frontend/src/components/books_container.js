import { connect } from 'react-redux';
import { receiveAllBooks } from '../actions/books_action';
import { withRouter } from 'react-router';
import HomePage from './homePage';

const mstp = state => ({
  books: state.books
})

const mdtp = dispatch => ({

})

export default withRouter(connect(mstp, mdtp)(HomePage));