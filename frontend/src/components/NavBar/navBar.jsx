import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({logout, loggedIn}) => {

  const logoutUser = (e) => {
      e.preventDefault();
      logout();
  }
  
  const getLinks = () => {  // Selectively render links dependent on whether the user is logged in
      if (loggedIn) {
        return (
            <div className="navBarLinks">
                <Link to={'/wishlist'}>Wish List</Link>
                <Link to={'/readlist'}>Read List</Link>
                <button onClick={logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="navBarLinks">
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }
  
  return (
    <div className="NavbarMain">
       <h1><Link to={'/'}> Bookfinder</Link></h1> 
        { getLinks() }
    </div>
  );
}

export default NavBar;