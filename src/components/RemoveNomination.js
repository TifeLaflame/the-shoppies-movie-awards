import React from 'react';


const RemoveNomination = ({handleNomination}) => (
  <>
    <button className="btn btnSec"
      onClick={handleNomination}>
      Remove 
      <img src={process.env.PUBLIC_URL + '/images/close.png'} alt='Remove Nominated Movie' className='close'/>
    </button>
  </>
);

export default RemoveNomination;
