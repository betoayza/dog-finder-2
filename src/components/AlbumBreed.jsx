import React from "react";

export const AlbumBreed = ({ images, breed, subBreed }) => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "auto auto auto",
      }}
    >
      <h2>
        {breed} {subBreed}
      </h2>
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt="Image"
            className={"img-fluid p-3"}
            style={{ height: "200px", width: "200px" }}
          />
        );
      })}
    </div>
  );
};
