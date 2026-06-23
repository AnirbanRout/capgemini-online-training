import React, { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        // console.log(response);

        if (!response.ok) {
          console.log("Error fetching data");
          return;
        }

        const data = await response.json();
        setData(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cards">
      {data.map((item) => (
        <div key={item.id} className="item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
