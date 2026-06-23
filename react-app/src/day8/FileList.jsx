const FileList = ({ fruits, fruit_obj, employee_details, products }) => {
  return (
    <>
      {/* <h2>Fruits:</h2>
      <ul>
        {fruits.map((fruit, idx) => {
          return <li key={idx}>{fruit}</li>;
        })}
      </ul>
      <hr />
      <h2>Fruit Objects:</h2>
      <ul>
        {fruit_obj.map((fr, idx) => {
          return (
            <li key={idx}>
              {fr.name} - {fr.color}
            </li>
          );
        })}
      </ul>
      <hr />
      <h2>Employee Details:</h2>
      <ul>
        {employee_details.map((emp, idx) => {
          return (
            <li key={idx}>
              {emp.name} - {emp.position} - {emp.department} - {emp.email}
            </li>
          );
        })}
      </ul>
      <hr />
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employee_details.map((emp, idx) => {
            return (
              <tr key={idx}>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>{emp.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr /> */}
      <h2 style={{ textAlign: "center" }}>Products:</h2>
      <table border="1" cellPadding="20" cellSpacing="0" className="prod-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.inStock ? "Yes" : "No"}</td>
              <td>
                {product.inStock ? (
                  <button>Add to Cart</button>
                ) : (
                  <span>Out of Stock</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FileList;
