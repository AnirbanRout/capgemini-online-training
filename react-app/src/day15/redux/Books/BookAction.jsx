import React from "react";

const purchase_book = () => {
  return {
    type: "BUY_BOOK",
    payload: 10,
  };
};

const sold_book = () => {
  return {
    type: "SOLD_BOOK",
    payload: 5,
  };
};

export { purchase_book, sold_book };
