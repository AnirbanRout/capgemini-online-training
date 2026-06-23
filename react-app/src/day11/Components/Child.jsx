import React from "react";

const Child = React.memo(() => {
  console.log("child rendered...");
  return <h2>Child Component</h2>;
});

export default Child;
