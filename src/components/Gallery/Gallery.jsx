import React, { useState, useEffect } from "react";
import "./gallery.css";
import { portraitsPhotos, familyPhotos, weddingsPhotos } from "../../data";
import GalleryList from "./GalleryList";

const Gallery = ({ view }) => {
  const [selected, setSelected] = useState("portraits");
  const [data, setData] = useState([]);

  const styleGrid = {
    transform: `${view >= 1200 ? "translateY(-35%)" : "0"}`,
    opacity: `${view >= 1200 ? "1" : "0"}`,
  };

  const list = [
    /// names of the buttons in GalleryList
    {
      id: "portraits",
      title: "PORTRAITS",
    },
    {
      id: "family",
      title: "FAMILY",
    },
    {
      id: "weddings",
      title: "WEDDINGS",
    },
  ];

  useEffect(() => {
    /// useEffect for buttons to handle switching
    switch (selected) {
      case "portraits":
        setData(portraitsPhotos);
        break;
      case "family":
        setData(familyPhotos);
        break;
      case "weddings":
        setData(weddingsPhotos);
        break;
      default:
        setData(portraitsPhotos);
    }
  }, [selected]);

  return (
    <div className="gallery" id="gallery">
      <div>
        <h1 className="maintext">MY WORKS</h1>
      </div>
      <ul className="buttons">
        {list.map((item) => (
          <GalleryList
            key={item.id}
            title={item.title}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="galleryContainer" style={styleGrid}>
        <div className="grid">
          {data.map((image) => (
            <div className="imageContainer">
              <img
                className="image"
                key={image.id}
                id={image.id}
                src={image.img}
                alt={image.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
