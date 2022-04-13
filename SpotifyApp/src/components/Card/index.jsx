import {
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";
import React, { useState } from "react";
import "./index.css";

const Card = ({ title, artists, img, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };

  return (
    <Grid>
      <CardActionArea>
        <Typography>
          <div className="card">
            <CardMedia>
              <img src={img} alt={title} className="card_img" />
            </CardMedia>
            <CardContent>
              <div className="card_content">
                <h3 className="card_album">{title}</h3>
                <h3 className="card_artist">{artists}</h3>
                <div className="button_wrapper">
                  <button className="card_button" onClick={handleToggleSelect}>
                    {isSelected ? "Deselect" : "Select"}
                  </button>
                </div>
              </div>
            </CardContent>
          </div>
        </Typography>
      </CardActionArea>
    </Grid>
  );
};

export default Card;
