import { connect } from "react-redux";
import {fetchWishlist, remove_book} from '../../actions/wishlist_action'
import { withRouter } from 'react-router';
import Wishlist from './wishlist'

const mstp = store => ({
  wishlists: Object.values(store.wishlists),
  currentUser: store.session.user
})

const mdtp = dispatch => ({
  fetchWishlist: id => dispatch(fetchWishlist(id)),
  remove_book: id => dispatch(remove_book(id))
})

export default withRouter(connect(mstp,mdtp)(Wishlist))