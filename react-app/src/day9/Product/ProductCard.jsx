import axios from "axios";
import UpdateProduct from "./UpdateProduct";
import React, { useState } from "react";

const ProductCard = ({ product, getProducts, updateCount, delProd }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <div className="btn-group">
        <button onClick={() => setIsUpdating(true)}>Update</button>
        <button onClick={() => delProd(product.id)}>Delete</button>
        <button onClick={updateCount}>Add to Cart</button>
      </div>
      {isUpdating && (
        <UpdateProduct
          id={product.id}
          closeForm={() => setIsUpdating(false)}
          getProducts={getProducts}
        />
      )}
    </div>
  );
};

export default ProductCard;
