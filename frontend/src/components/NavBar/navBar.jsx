import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({logout, loggedIn, user}) => {

  const logoutUser = (e) => {
      e.preventDefault();
      logout();
  }
  
  const getLinks = () => {  // Selectively render links dependent on whether the user is logged in
      if (loggedIn) {
        return (
            <div className="navBarLinks">
               <h3>Hi {user}</h3>
               <div className="navBarlinksLinks">
                <i class="fa-solid fa-books"></i>
                <Link to={'/wishlist'}>Wish List</Link>
                <i class="fa-solid fa-books"></i>
                <Link to={'/readbooks'}>Read List</Link>
              </div>
              <button onClick={logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="notSignedInbutton">
                <Link to='/signup'>Sign-up</Link>
                <Link to='/login'>Log-in</Link>
            </div>
        );
      }
  }
  
  return (
    <div className="NavbarMain">
       <h1><Link to={'/'}> Bookfinder</Link></h1> 
       <h3>Happy Reading!</h3>
        { getLinks() }
    </div>
  );
}

export default NavBar;