const addToDo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: crypto.randomUUID(),
      text: data,
    },
  };
};

const deleteToDo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

const updateToDo = (id, newData) => {
  return {
    type: "UPDATE_TODO",
    payload: { id, newData },
  };
};

export { addToDo, deleteToDo, updateToDo };
