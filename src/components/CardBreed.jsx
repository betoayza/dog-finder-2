import axios from "axios";
import React, { useState, useEffect } from "react";


export const CardBreed = ({ breed, subBreeds }) => {
  const [image, setImage] = useState(null);
  //   console.log(breed);
  //   console.log(subBreeds);

  useEffect(() => {
    const getPhoto = async () => {
      const options = {
        headers: {
          // "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Headers": "*",
          //Accept: "application/json",
        },
        timeout: 3000,
      };

      await axios
        .request(`https://dog.ceo/api/breed/${breed}/images/random`, options)
        .then((res) => {
          console.log(res.data.message);
          if (res.data) {
            setImage(res.data["message"]);
          }
        })
        .catch((error) => error);
    };

    getPhoto();
  }, []);

  return (
    <div>
      <div className="card p-2 m-1" style={{ width: "200px", height: "300px" }}>
        <img src={image} className="card-img-top" style={{height: "120px", width: "auto"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#6610f2" }}>
            {breed}
          </h5>
          <div style={{ overflow: "auto", height: "100px", width: "170px" }}>
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
