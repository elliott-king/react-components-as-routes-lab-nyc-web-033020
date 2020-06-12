import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirector = (director) => {
    return (
      <div>
        {director.name}
        <ul>
        {director.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => renderDirector(d))}
    </div>
  );
}

export default Directors
