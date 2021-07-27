import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions'

const NavBar = () => {
  return (
    <div>
     <h1>nav bar</h1> 
    </div>
  )
}

const mstp = ({ session, entities: { users } }) => {
  return ({
    currentUser: users[session.id]
  })
}
const mdtp = dispatch => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(mstp, mdtp)(NavBar);