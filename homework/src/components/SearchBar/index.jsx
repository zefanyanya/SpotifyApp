import React, { Component } from "react";
import "./index.css";

class Searchbar extends Component {
  state = {
    text: "",
  };

  hendleInput(e) {
    this.setState({ text: e.target.value });
  }

  async onSubmit(e) {
    const { text } = this.state;

    const option = {
      header: {
        Authorization: this.props.accessToken,
        "Content-Type": "application/json",
      },
    };

    // const response = await fetch(
    //   `${config.SPOTIFY_BASE_URL}/v1/search?type=track&q=${text}`
    // ).then(data.json());
    // const tracks = response.items;
    // this.props.onSuccess(tracks);
  }

  render() {
    return (
      <div className="searchbarWrap" onSubmit={(e) => this.onSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="form_inputSearch"
          required
          onChange={this.handleInput}
        />
        <button type="submit" value="submit">
          Search
        </button>
      </div>
    );
  }
}

export default Searchbar;









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
