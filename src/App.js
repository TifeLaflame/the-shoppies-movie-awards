import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import Header from './components/Header';
import MovieItem from './components/MovieItem';
import AddNomination from './components/AddNomination';
import RemoveNomination from './components/RemoveNomination';
import { Container, MovieWrap, InputWrap, Input, Div, SectionHeading } from './components/Elements';
import Modal from './components/Modal';
import './App.css';

const API_KEY = '232670a6';
const MOVIE_STORAGE_KEY = 'Movies Nominated';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [movieNominations, setMovieNominations] = useState([]);
  const [errorMessage, setErrorMessage]= useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async (searchQuery) => {
      const url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`;
      try {
        setLoading(true);
        const blob = await fetch(url);
        const result = await blob.json();
        if ("Search" in result ) {
          const movies = result.Search;
          if (movies && movies.length > 0) {
            setMovies(movies);
          } 
        } else if ("Error" in result ) {
          let tempErrorMessage;

          switch (result.Error) {
            case "Too many results.":
              tempErrorMessage = "Too many results. Try adding more characters.";
              break;
            case "Movie not found!":
              tempErrorMessage = "No results found.";
              break;
            case "Incorrect IMDb ID.":
              tempErrorMessage = "";
              break;
            default:
              tempErrorMessage = "Something went wrong."
              break;
          }
          setErrorMessage(tempErrorMessage);
          setMovies([]);
        }
        setLoading(false);
    } catch(error) {
        setLoading(false);
        console.log(error);
      }
    };

    getMovies(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const nomMovies = localStorage.getItem(MOVIE_STORAGE_KEY);
    const savedNomMovies = JSON.parse(nomMovies);
    if (savedNomMovies) {
      setMovieNominations(savedNomMovies); 
    }
  }, []);

  const handleToggle = () => {
    setShowBanner(!showBanner);
  }

  const handleOnChange = e => {
    setSearchQuery(e.target.value);
  }

  const saveToLocalStorage = items => {
    localStorage.setItem(MOVIE_STORAGE_KEY, JSON.stringify(items));
  }

  const addNomination = movie => {
    const newMovies = [...movieNominations, movie];
    if (newMovies.length === 5) {
      setShowBanner(true);
    }
    setMovieNominations(newMovies); 
    saveToLocalStorage(newMovies);
  }

  const removeNomination = movie => {
    const newMovies = movieNominations.filter(value => value.imdbID !== movie.imdbID);
    setMovieNominations(newMovies);
    saveToLocalStorage(newMovies);
  }

  const renderSearchResults = () => {
    if (movies.length === 0 && errorMessage) {
      return (
        <div className='error'>
          <p>{errorMessage}</p>
        </div>
      );
    }
    return (
      <Div>
        <SectionHeading>Search Results</SectionHeading>
          <MovieWrap>
            {movies.map(movie => {
              let actionDisabled = movieNominations.includes(movie);
              return (
                <MovieItem 
                  key={movie.imdbID} 
                  movieData={movie}
                  actionComponent={AddNomination}
                  actionDisabled={actionDisabled}
                  handleNomination={() => addNomination(movie)}      
                />
              );
            })}
          </MovieWrap>
      </Div>
    );
  }

  return ( 
    <Container>
      <Header heading='Welcome to The Shoppies' subHeading='Movie awards for entrepreneurs' />
      <InputWrap>
        <Input 
          type='text'
          value={searchQuery}
          onChange={handleOnChange}
          placeholder='Search for a movie title'>
        </Input>
      </InputWrap>
      {loading 
        ? 
          <div className='loaderDiv'>
            <Loader
              type="ThreeDots"
              color="#3bc0d0"
              height={80}
              width={80}
              timeout={5500} 
            />
          </div>
        : <section>
            {renderSearchResults()}
            <Div>
              <SectionHeading>Nominations</SectionHeading>
                <MovieWrap>
                {movieNominations.map(movie => (
                  <MovieItem 
                    key={movie.imdbID}
                    movieData={movie} 
                    actionComponent={RemoveNomination}
                    handleNomination={() =>removeNomination(movie)} />
                ))}
                </MovieWrap>    
            </Div>
          </section> 
      }
      <Modal show={showBanner} handleToggle={handleToggle}/>
    </Container>
  );
}

export default App;
