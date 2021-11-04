import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Result from './results';
import {add_Book, remove_book} from "../../actions/wishlist_action"
import {addReadBook, deleteReadBook} from "../../actions/readbooks_actions"

const mstp = (store, ownProps) => ({
  //ownProps = only access in mstp
  // results: new URLSearchParams(location.search).get("search"),
  history: ownProps.history.location.search, 
  mainhistory: ownProps.history, 
  ownProps: ownProps,
  currentUser: store.session.user,
  readbooks: Object?.values(store.readbooks).map(book => book.book_id),
  readbooksSlice: store.readbooks,
  wishListSlice: store.wishlists,
  wishlist:Object?.values(store.wishlists).map(book => book.book_id)

})

const mdtp = dispatch => ({
 addBook: (book, currentUser) => dispatch(add_Book(book, currentUser)),
 addReadBook: (book) => dispatch(addReadBook(book)),
 remove_wish: id => dispatch(remove_book(id)),
 deleteReadBook: readBook_id => dispatch(deleteReadBook(readBook_id))

})

// let connectFunc = connect(mstp, mdtp);// return a function 
// let connectComp = connectFunc(Result);// return Result comp w the addition of the result props
// let connectRout = withRouter(connectComp);
// export default connectRout;

export default withRouter(connect(mstp,mdtp)(Result));