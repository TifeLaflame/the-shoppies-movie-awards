import React from 'react';
import { Img } from './Elements';

const MovieItem = (props) => {
  const {
    actionComponent: ActionComponent, movieData, actionDisabled, handleNomination
  } = props;
  const posterImageURL = movieData.Poster === "N/A" ? "https://dummyimage.com/220x320/262626/3bc1d0&text=No+poster+found" : movieData.Poster;

  return (
    <div className="movie">
      <div className="movieitem">
        <Img src={posterImageURL} alt={movieData.Title} /> 
        
        <div className="overlay">
          <h4>{movieData.Title}</h4>
          <p>{movieData.Year}</p>
        </div>     
      </div>
      <div className="cta">
      <ActionComponent disabled={actionDisabled} handleNomination={handleNomination} />
    </div> 
  </div>
  );
 
}

export default MovieItem;
