import React, { useState, useEffect } from "react";
import "./gallery.css";
import { portraitsPhotos, familyPhotos, weddingsPhotos } from "../../data";
import GalleryList from "./GalleryList";

const Gallery = () => {
  const [selected, setSelected] = useState("portraits");
  const [data, setData] = useState([]);

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
      <div className="galleryContainer">
        <div className="maintext">
          <h1>MY WORKS</h1>
        </div>
        <ul className="buttons">
          {list.map((item) => (
            <GalleryList
              title={item.title}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="galleryContainer">
          <div className="grid">
            {data.map((d) => (
              <div className="imageContainer">
                <img className="image" id={d.title} src={d.img} alt={d.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
