import React, { useState } from "react";
import config from "../../lib/config";
// import Button from "../Button";
import "./index.css";
import { useSelector } from "react-redux";

export default function Searchbar({ onSuccess }) {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`,
        requestOptions
      ).then((data) => data.json());

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };

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
        <button className="btn" type="Submit">
          Search
        </button>
      </form>
    </div>
  );
}
