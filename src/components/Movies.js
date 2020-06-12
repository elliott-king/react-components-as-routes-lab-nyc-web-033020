import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovie = (movie) => {
    return (
      <div>
        {movie.title}: {movie.time}
        <ul>
          {movie.genres.map(g => <li>{g}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m => renderMovie(m))}
    </div>
  );
};

export default Movies;
