import React from "react";
import "./index.css";

const Card = ({ title, artists, img }) => {
  return (
    <div className="card">
      <div className="card-wrap">
        <img src={img} alt={title} className="card_img" />

        <div class="card_content">
          <h3 className="card_album">{title}</h3>
          <h3 className="card_artist">{artists}</h3>
        </div>

        <div className="button_wrapper">
          <button className="card_button">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Card;



// import React from 'react';
// import './index.css';
// import PropTypes from 'prop-types';
// import Button from '../Button';
// // import data from '../../data/data';


// export default function Card({ imageUrl, title, artist }) {
//   return (
//     <div className="card">
//       <div className="card__image">
//         <img src={imageUrl} alt={title} />
//       </div>

//       <div className="card__data">
//         <div className="card__content">
//           <h3 className="card__title">{title}</h3>
//           <p className="card__artist">{artist}</p>
//         </div>
        
//         <div className="card__action">
//           <Button variant="secondary">Select</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// Card.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   artist: PropTypes.string.isRequired,
// }















// // import React from 'react'
// // import './index.css';

// // const Card = ({title, artists, img}) =>  {
// //   return (
// //     <div className="Container">
// //     <div className="Card">
// //       <img className="img" src={img} alt={title}/>
// //       <h1 className="title">{title}</h1>
// //       <h3 className="artists">{artists}</h3>
// //       <div className="button-wrapper">
// //         <button className="button" id="select"> Select</button>
// //       </div>
// //       </div>

// //       {/* <div>
// //         <img src={data.album.images[0].url} width="300" height="300" />
// //       </div>
// //       <div>
// //         <h2>{data.name}</h2>
// //         <h3>{data.album.name}</h3>
// //         <p>{data.artists[0].name}</p>
// // 	<button className='btn'><a href={data.album.artists[0].external_urls.spotify}>select</a></button>
// //       </div>*/}
// //     </div>
// //   );
// // }

// // export default Card;