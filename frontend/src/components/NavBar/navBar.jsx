import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({
  logout, loggedIn, user, currentUser, store, fetchWishlist, fetchReadBooks
  }) => {


  // const [readbook, setReadbook] = useState(store.readbooks);
  // const [ourUser, setOurUser] = useState(currentUser);
  
  // useEffect(() => {
  //   fetchWishlist(currentUser?.id)
  // }, [])
  
  // useEffect(() => {
  //   fetchReadBooks(currentUser?.id)
  // }, [])

  useEffect(() => {
    fetchReadBooks(currentUser?.id)
    fetchWishlist(currentUser?.id)
  }, [currentUser])

  // useEffect(() => {
  //   fetchWishlist(currentUser?.id)
  // }, [currentUser])

  // useEffect(() => {
  //   setWishlist(store.wishlists)
  // }, [store.wishlists])

  // useEffect(() => {
  //   fetchReadBooks(currentUser?.id)
  // }, [store.readbooks])

  const logoutUser = (e) => {
      e.preventDefault();
      logout();
  }

  const readCount = () => {
    return Object?.values(store?.readbooks)?.length
  }
  const wishCount = () => {
    return Object?.values(store?.wishlists)?.length
  }
  
  const getLinks = () => {  // Selectively render links dependent on whether the user is logged in
      if (loggedIn) {
        return (
            <div>
              <div class="dropdown">
                <button class="dropbtn">{user}  <i class="fas fa-address-book"></i></button>
                <div class="dropdown-content">
                  <Link to={'/readbooks'}> ({readCount()}) Read List</Link>
                  <Link to={'/wishlist'}> ({wishCount()}) Wish List</Link>
                  <a onClick={logoutUser}>Sign Out</a>
                </div>
              </div>
            </div>
        );
      } else {
        return (
            <div className="notSignedInbutton">
                <Link id='signupbtn' to='/signup'>Sign-up</Link>
                <Link to='/login'>Log-in</Link>
            </div>
        );
      }
  }
  
  return (
    <div className="NavbarMain">
      <h1 className="mainHeading"><Link to={'/'}>Bookfinder</Link></h1> 
      <h3>Happy Reading!</h3>
      { getLinks() }
    </div>
  );
}

export default NavBar;