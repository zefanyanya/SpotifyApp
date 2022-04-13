import React, { useState } from "react";
import config from "../../lib/config";

import "./index.css";
import { useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

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
        <Grid container justify-content="flex-end">
          <TextField
            variant="outlined"
            color="solid"
            label="Search a Song"
            required
            onChange={handleInput}
          />

          <Button
            variant="contained"
            margin="normal"
            color="green"
            size="large"
          >
            Search
          </Button>
        </Grid>
      </form>
    </div>
  );
}
