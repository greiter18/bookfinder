import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Result from './results';
import {add_Book} from "../../actions/wishlist_action"
import {addReadBook} from "../../actions/readbooks_actions"

const mstp = (store, ownProps) => ({
  //ownProps = only access in mstp
  // results: new URLSearchParams(location.search).get("search"),
  history: ownProps.history.location.search, 
  mainhistory: ownProps.history, 
  ownProps: ownProps,
  currentUser: store.session.user,

})

const mdtp = dispatch => ({
 addBook: (book, currentUser) => dispatch(add_Book(book, currentUser)),
 addReadBook: (book) => dispatch(addReadBook(book))

})

// let connectFunc = connect(mstp, mdtp);// return a function 
// let connectComp = connectFunc(Result);// return Result comp w the addition of the result props
// let connectRout = withRouter(connectComp);
// export default connectRout;

export default withRouter(connect(mstp,mdtp)(Result));