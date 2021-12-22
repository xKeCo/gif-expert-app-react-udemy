import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h2 className="section-name">{category}</h2>
      <hr className="section-divider" />
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
