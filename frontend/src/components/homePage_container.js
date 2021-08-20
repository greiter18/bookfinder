import { connect } from "react-redux";
import { withRouter } from 'react-router';
import HomePage from "./homePage";
import {add_Book} from "../actions/wishlist_action"

const mstp = store => ({
  currentUser: store?.session?.user
})

const mdtp = dispatch => ({
 addBook: (bookId, currentUser) => dispatch(add_Book(bookId, currentUser))
})

export default withRouter(connect(mstp,mdtp)(HomePage))