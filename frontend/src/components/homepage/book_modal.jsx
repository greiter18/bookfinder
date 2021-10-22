import React, {} from 'react'

const Modal = ({description}) => {

  const openModal = () => {
    document.querySelector('.modal').classList.toggle('open-modal');
    document.querySelector('.modal-background').classList.toggle('open-modal');
  }

  return (
    <div>
      <p>{description}</p>
    </div>
  )
};

export default Modal;