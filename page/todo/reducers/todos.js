export const todos = (state = [], action) => {
  let {id, text, type} = action;
  switch (type) {
    case 'ADD_TODO':
      console.log(state);
      return [
        ...state,
        {
          id: id,
          text: text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );
    default:
      return state;
  }
};

export const visiFilter = (state = 'SHOW_ALL', action) => {
  const {type, filter} = action;
  switch (type) {
    case 'SET_FILTER':
      return filter;

    default:
      return state;
  }
};
