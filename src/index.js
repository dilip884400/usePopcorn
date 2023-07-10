import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

// import './index.css';
// import App from './App';


function Test(){
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={5} color="blue" onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating}</p>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} className="test" messages={['terrible','bad','okay','good','amazing']} />
    <StarRating size={54} color='green' maxRating={5} defaultRating={3}/>
    <Test/>
    {/* <App /> */}
  </React.StrictMode>
);


