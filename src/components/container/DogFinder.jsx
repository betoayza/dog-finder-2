import React, { useState, useEffect } from "react";
import axios from "axios";
import { AllBreeds } from "../pure/AllBreeds";
import { Form } from "./Form";

export const DogFinder = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getAllBreeds = async () => {
      const options = {       
        timeout: 3000,
      };

      await axios
        .request(`https://dog.ceo/api/breeds/list/all`, options)
        .then((res) => {
          if (res.data) {
            setBreeds(res.data.message);
          }
        })
        .catch((error) => error);
    };

    getAllBreeds();
  }, []);

  return (
    <div className={"h-auto text-center"}>
      <h2 style={{ color: "#6610f2" }}>Dog Finder</h2>
      <Form />
      <AllBreeds breeds={breeds} />
    </div>
  );
};
