import { useState } from "react";
import RestaurantInfo from "./RestaurantInfo";

const FoodOrderApp = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToOrder = () => {
    setQuantity(quantity + 1);
  };

  const handleDeleteFromOrder = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };

  return (
    <div>
      <h1>Food Order App</h1>
      <p>Select items:{quantity}</p>
      <button onClick={handleAddToOrder}>Add to Order</button>
      <button onClick={handleDeleteFromOrder}>Delete from Order</button>
      <RestaurantInfo />
    </div>
  );
};

export default FoodOrderApp;
