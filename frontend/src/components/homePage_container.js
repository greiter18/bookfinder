import { connect } from "react-redux";
import { withRouter } from 'react-router';
import HomePage from "./homePage";

const mstp = store => ({
  currentUser: store?.session?.user
})

const mdtp = dispatch => ({

})

export default withRouter(connect(mstp,mdtp)(HomePage))