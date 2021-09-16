import { connect } from "react-redux";
import { withRouter } from 'react-router';
import HomePage from "./homePage";
import {add_Book} from "../actions/wishlist_action"

const mstp = store => ({
  currentUser: store?.session?.user
})

const mdtp = dispatch => ({
 addBook: (book, currentUser) => dispatch(add_Book(book, currentUser))
})

export default withRouter(connect(mstp,mdtp)(HomePage))