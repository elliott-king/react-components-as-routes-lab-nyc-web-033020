import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActor = (actor) => {
    return (
      <div>
        {actor.name}
        <ul>
          {actor.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => renderActor(a))}
    </div>
  );
};

export default Actors;
