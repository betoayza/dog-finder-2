import React from "react";

export const AlbumBreed = ({ images, breed, subBreed }) => {
  return (
    <div
      className={"text-center container p-2"}      
    >
      <h2 style={{ color: "white" }}>
        {breed} {subBreed}
      </h2>
      <div
        className={"row row-cols-auto"}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="Image"
              className={"img-fluid m-2"}
              style={{ maxHeight: "200px", maxWidth: "200px" }}
            />
          );
        })}
      </div>
    </div>
  );
};
