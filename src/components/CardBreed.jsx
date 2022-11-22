import React from "react";

export const CardBreed = ({ breed, subBreeds }) => {
  //   console.log(breed);
  //   console.log(subBreeds);

  return (
    <div>
      <div className="card p-2 m-1" style={{ width: "auto", height: "250px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#6610f2" }}>
            {breed}
          </h5>
          <div style={{ overflow: "auto", height: "150px", width: "170px" }}>
            {subBreeds.length
              ? subBreeds.map((subBreed, index) => {
                  return (
                    <p
                      key={index}
                      className="card-text"
                      style={{ fontStyle: "italic", color: "#6b9e42" }}
                    >
                      {subBreed}
                    </p>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
