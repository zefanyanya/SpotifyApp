import React, { useState } from "react";
import "./index.css";
import config from "../../lib/config";
import { useSelector } from "react-redux";

const FormCreatePlaylist = ({ uris }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userId = useSelector((state) => state.auth.user.id);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.title.length > 10) {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
          },
        };

        const optionsFormCreatePlaylist = {
          ...requestOptions,
          body: JSON.stringify({
            name: form.title,
            description: form.description,
            public: false,
            collaborative: false,
          }),
        };

        const responseCreatePlaylist = await fetch(
          `${config.SPOTIFY_BASE_URL}/users/${userId}/playlists`,
          optionsFormCreatePlaylist
        ).then((data) => data.json());

        const optionsAddTrack = {
          ...requestOptions,
          body: JSON.stringify({
            uris,
          }),
        };

        await fetch(
          `${config.SPOTIFY_BASE_URL}/playlists/${responseCreatePlaylist.id}/tracks`,
          optionsAddTrack
        ).then((data) => data.json());

        setForm({ title: "", description: "" });
        alert("playlist created successfully");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Title must be large 10 characters");
    }
  };

  return (
    <div className="top-wraper">
      <form className="create-form" onSubmit={handleSubmit}>
        <label className="label">Create Playlist</label> <br />
        <div className="isian">
          <input
            type="text"
            name="title"
            className="isian"
            placeholder="Title..."
            value={form.title}
            onChange={handlechange}
          />
          <br />
          <textarea
            name="description"
            id="description"
            className="isian"
            cols="60"
            rows="3"
            placeholder="Description"
            value={form.description}
            onChange={handlechange}
          ></textarea>
          <br />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default FormCreatePlaylist;
