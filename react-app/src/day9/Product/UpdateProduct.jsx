import axios from "axios";
import React, { useState, useEffect } from "react";

const UpdateProduct = ({ id, closeForm, getProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgurl, setImgurl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setName(res.data.title);
        setPrice(res.data.price);
        setImgurl(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    const new_product = {
      title: name,
      price: price,
      image: imgurl,
    };
    axios
      .put(`http://localhost:3000/products/${id}`, new_product)
      .then((res) => {
        console.log(res.data);
        closeForm();
        getProducts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />

        <label htmlFor="imgurl">Image URL</label>
        <input
          type="text"
          id="imgurl"
          name="imgurl"
          value={imgurl}
          onChange={(e) => setImgurl(e.target.value)}
        />

        <button type="submit" onClick={updateProduct}>
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
