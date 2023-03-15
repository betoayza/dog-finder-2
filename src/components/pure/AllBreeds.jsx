import React from "react";
import { CardBreed } from "../container/CardBreed";

export const AllBreeds = ({ breeds }) => {
  return (
    <div className={"container text-center"}>
      <h2>Breeds</h2>
      <div
        className={"row row-cols-auto m-1"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {Object.entries(breeds).map(([key, value], index) => {
          return (
            <CardBreed
              className={"col"}
              key={index}
              breed={key}
              subBreeds={value}
            />
          );
        })}
      </div>
    </div>
  );
};
