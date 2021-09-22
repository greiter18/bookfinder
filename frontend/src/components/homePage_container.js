import { connect } from "react-redux";
import { withRouter } from 'react-router';
import HomePage from "./homePage";
import {add_Book} from "../actions/wishlist_action"
import {addReadBook} from "../actions/readbooks_actions"

const mstp = store => ({
  currentUser: store.session.user 
})

const mdtp = dispatch => ({
 addBook: (book, currentUser) => dispatch(add_Book(book, currentUser)),
 addReadBook: (book) => dispatch(addReadBook(book))
})

export default withRouter(connect(mstp,mdtp)(HomePage))