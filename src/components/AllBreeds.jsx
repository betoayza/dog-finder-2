import React from "react";
import { CardBreed } from "./CardBreed";

export const AllBreeds = ({ breeds }) => {
  console.log(breeds);

  // style={{ display: "grid", placeItems: "center", gridTemplateColumns: "auto auto auto" }}

  return (
    <div className={"container text-center"}>
      <h2>Breeds</h2>
      <div
        className={"row row-cols-auto m-1"}
        style={{ }}
      >
        {Object.entries(breeds).map(([key, value], index) => {
          return <CardBreed className={"col"} key={index} breed={key} subBreeds={value} />;
        })}
      </div>
    </div>
  );
};
