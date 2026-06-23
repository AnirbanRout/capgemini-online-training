const PropsComp = ({ employee }) => {
  return (
    <div className="card">
      <h2>Employee Card:</h2>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Department: {employee.department}</p>
      <p>Location: {employee.location}</p>
    </div>
  );
};

export default PropsComp;
