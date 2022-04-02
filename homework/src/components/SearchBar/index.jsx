import React, { useState } from "react";
import config from '../../lib/config';
import Button from '../Button'
import "./index.css";

export default function Searchbar({ accessToken, onSuccess}) {
  const [text, setText] = useState('');

  
  const handleInput = (e) => {
    setText(e.target.value);
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    };
    
    try {
      const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, requestOptions)
        .then((data) => data.json());

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  }

    return (
      <div>
      <form className="form_inputSearch" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="form-search__input"
          required
          onChange={handleInput}
        />
        <Button className="btn" type="Submit">Search</Button>
      </form>
      </div>
    ) 
}



// export default function Searchbar({ accessToken, onSuccess}) {
  


// const Search=({accessToken,onSuccess})=>{

// // const [text,setText] = useState('')
// const handleInput=(e)=>{
//     setText(e.target.value)
// }

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const requestOptions = {
//       headers: {
//         'Authorization': 'Bearer ' + accessToken,
//         'Content-Type': 'application/json',
//       },
//     };

    // try {
    //   const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, requestOptions)
    //     .then((data) => data.json());

    //   const tracks = response.tracks.items;
    //   onSuccess(tracks);
    // } catch (e) {
    //   alert(e);
    // }
// }

//     const { text } = this.state;

//     var requestOptions = {
//       headers: {
//         'Authorization': 'Bearer ' + this.props.accessToken,
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, requestOptions)
//         .then((data) => data.json());

//       const tracks = response.tracks.items;
//       this.props.onSuccess(tracks);
//     } catch (e) {
//       alert(e);
//     }

//     e.target.blur();
//   }
  
//     return (
//       <form className="form-search" onSubmit={onSubmit}>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="form-search__input"
//           required
//           onChange={handleInput}
//         />
//         <Button className="btn" type="Submit">Search</Button>
//       </form>
//     )
  
// };





// return (
//   <form className="form-search" onSubmit={onSubmit}>
//     <input
//       type="text"
//       placeholder="Search..."
//       className="form-search__input"
//       required
//       onChange={handleInput}
//     />
//     <Button className="btn" type="submit">Search</Button>
//   </form>
// )
// export default Searchbar;









// import React, { Component } from 'react'
// import config from '../../lib/config';
// import Button from '../Button'
// import './index.css'

// export default class SearchBar extends Component {
//   state = {
//     text: '',
//   }

//   handleInput(e) {
//     this.setState({ text: e.target.value });
//   }

//   async onSubmit(e) {
//     e.preventDefault();

//     const { text } = this.state;

//     var requestOptions = {
//       headers: {
//         'Authorization': 'Bearer ' + this.props.accessToken,
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, requestOptions)
//         .then((data) => data.json());

//       const tracks = response.tracks.items;
//       this.props.onSuccess(tracks);
//     } catch (e) {
//       alert(e);
//     }

//     e.target.blur();
//   }

//   render() {
//     return (
//       <form className="form-search" onSubmit={(e) => this.onSubmit(e)}>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="form-search__input"
//           required
//           onChange={(e) => this.handleInput(e)}
//         />
//         <Button type="submit">Search</Button>
//       </form>
//     )
//   }
// }
