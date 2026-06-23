const ProductCard = ({ product }) => {
  return (
    <>
      {product.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            display: "inline-block",
            height: "150px",
            width: "150px",
          }}
        >
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
