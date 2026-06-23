import { useDispatch, useSelector } from "react-redux";
import { addToDo, updateToDo, deleteToDo } from "./ToDoAction";
import { useState } from "react";

const ToDoContainer = () => {
  const tasks = useSelector((state) => state.toDos);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <h1>ToDo Container</h1>
      <input
        type="text"
        placeholder="Enter a new todo..."
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button
        onClick={() => {
          if (newTask.trim() === "") {
            alert("Please enter a task.");
            return;
          }
          dispatch(addToDo(newTask));
          setNewTask("");
        }}
      >
        Add Todo
      </button>
      <hr />
      <div className="tasks">
        <h2>Tasks List:</h2>
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <p>{task.text}</p>
            <button
              onClick={() =>
                dispatch(updateToDo(task.id, { text: "Updated task text" }))
              }
            >
              Update Task
            </button>
            <button onClick={() => dispatch(deleteToDo(task.id))}>
              Delete Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoContainer;
