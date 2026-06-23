const ToDoItem = ({ item }) => {
  return (
    <div className="card">
      <h3>Title:{item.title}</h3>
      <p>Status: {item.status}</p>
      <p>Priority: {item.priority}</p>
    </div>
  );
};

export default ToDoItem;
