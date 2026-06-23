import axios from "axios";
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        console.log("Fetched users:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const addUser = () => {
    const newUser = {
      name: "New User",
      email: "newuser@example.com",
      username: "newuser",
    };
    axios
      .post("http://localhost:3000/users", newUser)
      .then((response) => {
        console.log("Added user:", response.data);
        setUsers((prevUsers) => [...prevUsers, response.data]);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div>
      <h2>Users List</h2>
      <button onClick={addUser}>Add user</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
