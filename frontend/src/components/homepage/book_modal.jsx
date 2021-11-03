import React, {} from 'react'

const Modal = ({description, title, authors, currentUser, readAdd, wishAdd, bookInfo, readSwitch, wishSwitch}) => {

   const addToWishlist = () => {
    if(currentUser?.id){
      return (<button className="addButtons" onClick={() => wishAdd(bookInfo, currentUser)}>Add to wishlist</button>)
    } else {
      return '';
    }
  }

  const addToReadBooks = () => {
    if(currentUser?.id){
      return (<button className="addButtons" onClick={() => readAdd(bookInfo)}>Read</button>)
    } else {
      return ''
    }
  }

  return (
    <div>
      <p>{title} by {authors}</p> 
      <br />
      <p>{description}</p>
      {/* {addToWishlist()} */}
      {readSwitch}
      {wishSwitch}
      {/* {addToReadBooks()} */}
    </div>
  )
};

export default Modal;