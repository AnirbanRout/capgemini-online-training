import React from "react";

const PureComponent = React.memo(({ name }) => {
  console.log("PureComponent rendered");

  return (
    <div>
      <h2>Pure Component</h2>
      <p>Name: {name}</p>
    </div>
  );
});

export default PureComponent;
