import React from 'react'
import data from '../../data/data';
import './index.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src={data.album.images[0].url} width="300" height="300" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
	<button><a href={data.album.artists[0].external_urls.spotify}>select</a></button>
      </div>
    </div>
  );
}

export default App;