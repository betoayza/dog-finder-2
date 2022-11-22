import React from "react";
import { CardBreed } from "./CardBreed";

export const AllBreeds = ({ breeds }) => {
  console.log(breeds);

  return (
    <div style={{display: "grid", placeItems: "center", gridTemplateColumns: "auto auto auto"}}>
      {Object.entries(breeds).map(([key, value], index) => {
        return <CardBreed key={index} breed={key} subBreeds={value} />;
      })}
    </div>
  );
};
