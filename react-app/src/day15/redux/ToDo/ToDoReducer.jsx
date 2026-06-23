const initalState = {
  toDos: [],
};

const ToDoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        toDos: state.toDos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.newData }
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default ToDoReducer;
