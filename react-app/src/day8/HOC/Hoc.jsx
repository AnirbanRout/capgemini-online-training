const Hoc = (comp) => {
  return function HocComponent() {
    return (
      <>
        <h1>HOC Component</h1>
        <comp />
      </>
    );
  };
};

export default Hoc;
