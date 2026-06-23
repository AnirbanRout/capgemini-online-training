import axios from "axios";
import { useState, useEffect, use } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>Length: {data.length}</p>
      <p>{data[0]?.name}</p>
    </div>
  );
};

export default Api;
