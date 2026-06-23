import React from "react";

const RestaurantInfo = React.memo(() => {
  console.log("RestaurantInfo rendered...");

  return (
    <div>
      <h1>Restaurant Info</h1>
      <p>Name: Spice Garden</p>
      <p>rating: 4.5</p>
      <p>delivery time: 30 mins</p>
    </div>
  );
});

export default RestaurantInfo;
