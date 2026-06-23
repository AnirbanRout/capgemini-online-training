const Logging = (WrappedComponent) => {
  return function LoggingComponent() {
    console.log("Component rendered");

    return <WrappedComponent />;
  };
};

export default Logging;
