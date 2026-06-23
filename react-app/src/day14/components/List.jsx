import api from "../api/api";
import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    api
      .get("/users")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Users List:</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
