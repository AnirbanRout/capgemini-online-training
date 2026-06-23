import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";

const Products = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const updateCount = () => {
    setCount(count + 1);
  };

  const getProducts = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  const filteredProducts = data.filter((item) =>
    item.title.toLowerCase().includes(name.toLowerCase()),
  );

  return (
    <div className="container">
      l<h2>Products added: {count}</h2>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="product-container">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            getProducts={getProducts}
            updateCount={updateCount}
            delProd={deleteProduct}
          />
        ))}
      </div>
      <AddProduct setPro={setData} />
    </div>
  );
};

export default Products;
