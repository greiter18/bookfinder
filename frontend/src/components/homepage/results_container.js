import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Result from './results';
import {add_Book} from "../../actions/wishlist_action"
import {addReadBook} from "../../actions/readbooks_actions"

const mstp = (store, ownProps) => ({
  // results: new URLSearchParams(location.search).get("search"),
  history: ownProps.history.location.search, 
  currentUser: store.session.user,

})

const mdtp = dispatch => ({
 addBook: (book, currentUser) => dispatch(add_Book(book, currentUser)),
 addReadBook: (book) => dispatch(addReadBook(book))

})

export default withRouter(connect(mstp,mdtp)(Result))