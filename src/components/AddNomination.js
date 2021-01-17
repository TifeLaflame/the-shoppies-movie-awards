import React from 'react';


const AddNomination = ({disabled, handleNomination}) => (
  <>
    <button className="btn btnPrimary" disabled={disabled}
    onClick={handleNomination}>Nominate</button>
  </>
);

export default AddNomination;
