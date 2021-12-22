import React from "react";

function GifGridItem({ id, title, url }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={url} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default GifGridItem;
