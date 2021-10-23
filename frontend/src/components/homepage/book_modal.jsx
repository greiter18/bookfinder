import React, {} from 'react'

const Modal = ({description, title, authors}) => {

  return (
    <div>
      <p>{title} by {authors}</p> 
      <br />
      <p>{description}</p>
    </div>
  )
};

export default Modal;