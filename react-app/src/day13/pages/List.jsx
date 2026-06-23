import { useMemo, useState } from "react";

const List = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  const [newData, setNewData] = useState("");
  const [checkData, setCheckData] = useState([]);
  const [radioData, setRadioData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const fruits = useMemo(
    () => ["Apple", "Banana", "Cherry", "Date", "Elderberry"],
    [],
  );
  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input type="text" name="" id="" value={data} onChange={handleChange} />
      <p>data: {data}</p>
      <hr />

      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>fruits:</h2>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <hr />

      <select
        name=""
        id=""
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      >
        <option value=""></option>
        <option value="School">School</option>
        <option value="College">College</option>
        <option value="University">University</option>
      </select>
      <p>Selected Data: {newData}</p>

      <hr />

      <h2>CheckBox</h2>
      <input
        type="checkbox"
        name="check1"
        value="Option 1"
        onChange={(e) => {
          if (e.target.checked) {
            setCheckData([...checkData, e.target.value]);
          } else {
            setCheckData(
              checkData.filter((data) => {
                return data !== e.target.value;
              }),
            );
          }
        }}
      />
      <label htmlFor="check1">Option 1</label>

      <input
        type="checkbox"
        name="check2"
        value="Option 2"
        onChange={(e) => {
          if (e.target.checked) {
            setCheckData([...checkData, e.target.value]);
          } else {
            setCheckData(
              checkData.filter((data) => {
                return data !== e.target.value;
              }),
            );
          }
        }}
      />
      <label htmlFor="check2">Option 2</label>

      <p>Checked Data: {checkData.join(", ")}</p>

      <hr />

      <h2>Radio Button</h2>
      <input
        type="radio"
        name="radioGroup"
        value="Radio 1"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label htmlFor="radio1">Radio 1</label>

      <input
        type="radio"
        name="radioGroup"
        value="Radio 2"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label htmlFor="radio2">Radio 2</label>

      <p>Selected Radio: {radioData}</p>
      <hr />
    </div>
  );
};

export default List;
