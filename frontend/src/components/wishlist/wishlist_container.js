import { connect } from "react-redux";
import {fetchWishlist, remove_book, fetchBooks} from '../../actions/wishlist_action'
import { withRouter } from 'react-router';
import Wishlist from './wishlist'

const mstp = store => ({
  wishlists: Object.values(store.wishlists),
  currentUser: store.session.user,
  // wishlistBook: Object.values()
})

const mdtp = dispatch => ({
  fetchWishlist: id => dispatch(fetchWishlist(id)),
  remove_book: id => dispatch(remove_book(id)),
  fetchBooks: id => dispatch(fetchBooks(id))
})

export default withRouter(connect(mstp,mdtp)(Wishlist))