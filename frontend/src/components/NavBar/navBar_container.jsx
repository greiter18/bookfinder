import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navBar';
import {fetchWishlist} from '../../actions/wishlist_action';
import {fetchReadBooks} from "../../actions/readbooks_actions";

const mstp = store => ({
  loggedIn: store.session.isAuthenticated,
  user: store.session.user?.username,
  currentUser: store.session.user,
  store: store
});

const mdtp = dispatch => ({
  fetchWishlist: id => dispatch(fetchWishlist(id)),
  logout: () => dispatch(logout()),
  fetchReadBooks: id => dispatch(fetchReadBooks(id)),
})

export default connect(mstp,mdtp)(NavBar);