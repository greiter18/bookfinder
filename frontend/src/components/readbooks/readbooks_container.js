import {connect} from "react-redux";
import {fetchReadBooks, deleteReadBook} from "../../actions/readbooks_actions";
import { withRouter } from 'react-router';
import ReadBooks from './readbooks';

const mstp = store => ({
readbooks: Object.values(store.readbooks),
currentUser: store.session.user
});

const mdtp = dispatch => ({
  fetchReadBooks: id => dispatch(fetchReadBooks(id)),
  deleteReadBook: readBook_id => dispatch(deleteReadBook(readBook_id)),
})

export default withRouter(connect(mstp,mdtp)(ReadBooks))