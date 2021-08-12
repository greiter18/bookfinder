import { connect } from "react-redux";
import {receiveWishlist, remove_book} from '../../actions/wishlist_action'
import { withRouter } from 'react-router';
import Wishlist from './wishlist'

const mstp = store => ({
  // books: store.books,
  // currentUser: store.session.user
})

const mdtp = dispatch => ({
  // receiveWishlist: id => dispatch(receiveWishlist(id)),
  // remove_book: id => dispatch(remove_book(id))
})

export default withRouter(connect(mstp,mdtp)(Wishlist))