import React from 'react'
import './index.css';

const Card = ({title, artists, img}) =>  {
  return (
    <div className="Card">
      <img className="img" src={img} alt={title}/>
      <h1 className="title">{title}</h1>
      <h3 className="artists">{artists}</h3>
      <div className="button">
        <button id="select"> Select</button>
      </div>
      
      {/* <div>
        <img src={data.album.images[0].url} width="300" height="300" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
	<button className='btn'><a href={data.album.artists[0].external_urls.spotify}>select</a></button>
      </div>*/}
    </div>
  );
}

export default Card;