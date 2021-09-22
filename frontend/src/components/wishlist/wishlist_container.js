import { connect } from "react-redux";
import {fetchWishlist, remove_book, fetchBooks} from '../../actions/wishlist_action'
import {addReadBook } from '../../actions/readbooks_actions'
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
  addReadBook: book => dispatch(addReadBook(book))
})

export default withRouter(connect(mstp,mdtp)(Wishlist))