import React from "react";

const BookList = React.memo(({ books, markAsFavorite }) => {
  console.log("BookList component rendered");

  return (
    <div>
      <h2>Books List:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => markAsFavorite(book)}>
              Mark as Favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default BookList;
