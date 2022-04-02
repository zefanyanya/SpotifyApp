import React from "react";
import "./index.css";
import Button from "../Button";

const Form = () => {
  const handleClick = () => {
    const title = document.getElementById("title").value;

    // alert(`Added new playlist. Playlist name: ${judul}`);


  };
  return (
    <div className="card">
      <div className="createPlaylist">
        <h1 className="title">Create Playlist</h1>
        <div className="form">
          <p>Title of Your Playlist :</p>
          <form action="#">
          <input
            minLength="10"
            type="text"
            id="title"
            name="title_input"
            placeholder="Input title"
            className="inputtitle"
          />
          <p className="description">Description :</p>
          <textarea
            id="description"
            placeholder="Add description"
            className="inputdesc"
          ></textarea>
          <p></p>
          <button onClick={handleClick}  id="btn-Submit" className="btn">
            Create Playlist
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;