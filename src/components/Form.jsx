import React, { useState } from "react";
import { AlbumBreed } from "./AlbumBreed";
import { Modal } from "./Modal";
import axios from "axios";

const initialForm = {
  breed: "",
  subBreed: "",
};

export const Form = () => {
  const [form, setForm] = useState(initialForm);
  const [modal, setModal] = useState(false);
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setModal(false);
    setResult([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      headers: {
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        // Accept: "application/json",
      },
      timeout: 3000,
    };

    await axios
      .request(
        `https://dog.ceo/api/breed/${form.breed}/${form.subBreed}/images/random/10`,
        options
      )
      .then((res) => {
        console.log(res.data);
        if (res.data["status"] === "success") {
          setModal(true);
          setResult(res.data["message"]);
        } else {
          setModal(true);
        }
      })
      .catch((error) => {
        error;
        setModal(true);
      });
  };

  return modal ? (
    <Modal>
      {result.length ? (
        <div>
          <AlbumBreed
            images={result}
            breed={form.breed}
            subBreed={form.subBreed}
          />
          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "white" }}>No results :(</h2>
          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </Modal>
  ) : (
    <div
      className=""
      style={{ display: "grid", placeItems: "center", height: "200px" }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.breed}
          name={"breed"}
          onChange={handleChange}
          className={"form-control mb-1"}
        />
        <input
          type="text"
          value={form.subBreed}
          name={"subBreed"}
          onChange={handleChange}
          className={"form-control mb-1"}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className={"btn btn-primary"}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
