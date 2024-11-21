import React, { useState } from "react";
import "./Add.css";
import { Link } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";
import Button from "../../Button2.jsx";
import Button2 from "../../Button3.jsx";

export default function Add() {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: ""
  };
  const [user, setUser] = useState(users);

  const inputHandler = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const submitForm = async e => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/create", user)
      .then(response => {
          toast.success(response.data.message);
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="addUser">
      <Link to="/">      <Button2/>
      </Link>
      {/* <i class="fa-solid fa-arrow-left"></i> */}
      <h3>Ajouter un utilisateur</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">Prénom</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={inputHandler}
            placeholder="Prenom"
            autoComplete="off"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Nom</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={inputHandler}
            placeholder="Nom"
            autoComplete="off"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={inputHandler}
            placeholder="Email"
            autoComplete="off"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={inputHandler}
            placeholder="Mot de passe"
            autoComplete="off"
            required
          />
        </div>

        <div className="inputGroup" style={{textAlign: "center" }}>
          {/* <button type="submit">Ajouter</button> */}

        </div>
          <Button/>
      </form>
    </div>
  );
}
