const Hoc = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return (
      <div
        style={{
          border: "2px solid blue",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "10px",
          backgroundColor: "#f0f8ff",
        }}
      >
        <h2>Enhanced Component</h2>
        <p>Status: Active</p>
        <p>Last Updated: {new Date().toLocaleString()}</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Hoc;
