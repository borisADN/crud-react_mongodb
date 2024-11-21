import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import axios from "axios";
import Button from "../Button";

export default function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/getAll");
      setUser(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="userTable">
      <Link to="/add">
        <Button />
      </Link>

      {/* <Link to="/add" className='addButton'>Ajouter un utilisateur</Link> */}
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom Complet</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Fetch and display user data */}
          {users.map((users, index) => {
            return (
              <tr key={users._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  {users.fname} {users.lname}
                </td>
                <td>
                  {users.email}
                </td>
                <td className="actionButtons">
                  <Link to={`/edit/${users._id}`}>
                  <i class="fa-solid fa-user-pen"></i>
                  </Link>
                  <button>
                  <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
