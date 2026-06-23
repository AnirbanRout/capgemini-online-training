import axios from "axios";
import React, { useState, useEffect } from "react";

const AddProduct = ({ setPro }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgurl, setImgurl] = useState("");

  const setUpdatedName = (e) => {
    setName(e.target.value);
  };

  const setUpdatedPrice = (e) => {
    setPrice(e.target.value);
  };

  const setUpdatedImgurl = (e) => {
    setImgurl(e.target.value);
  };

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      title: name,
      price: price,
      image: imgurl,
    };

    setName("");
    setPrice(0);
    setImgurl("");

    axios
      .post("http://localhost:3000/products", newProduct)
      .then((res) => {
        console.log(res.data);
        setPro((prevData) => [...prevData, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-product-container">
      <div className="add-product-card">
        <h1>Add Product</h1>

        <form className="add-product-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={setUpdatedName} />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={setUpdatedPrice}
          />

          <label htmlFor="imgurl">Image URL</label>
          <input
            type="text"
            id="imgurl"
            value={imgurl}
            onChange={setUpdatedImgurl}
          />

          <button type="submit" onClick={addProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
