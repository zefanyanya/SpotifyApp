import React, { useState } from "react";
import "./index.css";

interface IProps {
  img: string;
  title: string;
  artists: string;
  toggleSelect: () => void;
}

const Card: React.FC<IProps> = ({ title, artists, img, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleToggleSelect: () => void = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <div className="card">
      <img src={img} alt={title} className="img" />
      <div className="card_content">
        <h3 className="card_title">{title}</h3>
        <h3 className="card_artist">{artists}</h3>
        <button className="card_button" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};
export default Card;