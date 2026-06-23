import { useCallback, useMemo, useState } from "react";
import BookList from "./BookList";

const LibraryApp = () => {
  const books = useMemo(
    () => ["React Basics", "JavaScript Fundamentals", "Node.js Intro"],
    [],
  );

  const [colorChange, setColorChange] = useState(0);

  const handleColorChange = () => {
    setColorChange((prev) => prev + 1);
  };

  const markAsFavorite = useCallback((book) => {
    console.log(`Marked "${book}" as favorite!`);
  }, []);

  return (
    <div>
      <h2>Library Management App</h2>
      <BookList books={books} markAsFavorite={markAsFavorite} />
      <p>Color changes: {colorChange}</p>
      <button onClick={handleColorChange}>Change Title Color</button>
    </div>
  );
};

export default LibraryApp;
