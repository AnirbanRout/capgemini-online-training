const Products = ({ product }) => {
  return (
    <div className="cards">
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Rating: {product.ratings}</p>
      <button>Browse Product</button>
    </div>
  );
};

export default Products;
