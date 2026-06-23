import { useState, useMemo } from "react";

const StudentResult = () => {
  console.log("page rendered");
  const marks = useMemo(() => {
    return [78, 85, 92, 88, 76];
  }, []);

  const [themeCount, setThemeCount] = useState(0);

  const changeTheme = () => {
    console.log("Changing theme...");
    setThemeCount(themeCount + 1);
  };

  //without useMemo
  //   const total = marks.reduce((sum, mark) => {
  //     console.log("Calculating total...");
  //     return sum + mark;
  //   }, 0);

  //with useMemo
  const totalWithMemo = useMemo(() => {
    console.log("Calculating total with useMemo...");
    return marks.reduce((sum, mark) => sum + mark, 0);
  }, [marks]);

  return (
    <div>
      <h2>Student Result Portal:</h2>
      <p>marks obtained:</p>
      <ul>
        {marks.map((m, idx) => {
          return <li key={idx}>{m}</li>;
        })}
      </ul>
      <p>Total Marks: {totalWithMemo}</p>
      <p>Theme Count: {themeCount}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default StudentResult;
