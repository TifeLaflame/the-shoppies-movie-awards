import React from 'react';

const Modal = ({show, handleToggle}) => (
  <div className={show ? 'visible': ''} id='modal'>
    <h4 className='modalHeading'>You've nominated 5 movies</h4>
    <img 
      src='/the-shoppies-movie-awards/images/close.png' 
      alt='Close banner' 
      className='closeModal'
      onClick={handleToggle}
    />
  </div>
);

export default Modal;
