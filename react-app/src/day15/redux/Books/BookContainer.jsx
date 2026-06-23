import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { purchase_book, sold_book } from "./BookAction";
import BookReducer from "./BookReducer";

export default function BookContainer() {
  const numOfBooks = useSelector((state) => state.numOfBooks);
  const bookName = useSelector((state) => state.bookName);
  const d = useDispatch();
  return (
    <div>
      <h1>Book Container : {bookName} </h1>
      <h2>Number of Books : {numOfBooks} </h2>
      <button onClick={() => d(purchase_book())}>Buy Book</button>
      <button onClick={() => d(sold_book())}>Sell Book</button>
    </div>
  );
}
