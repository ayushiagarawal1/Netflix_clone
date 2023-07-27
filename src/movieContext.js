import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovieId, setSelectedMovieId }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;