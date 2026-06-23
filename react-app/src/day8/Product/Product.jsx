import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* <button>Add Product</button> */}

      <div className="product-container">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />

            <h2 className="product-title">{item.title}</h2>

            <p className="product-price">${item.price}</p>

            <div className="btn-group">
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
