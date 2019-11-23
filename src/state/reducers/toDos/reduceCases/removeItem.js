const removeItem = ({ state }) => ({ payload: { id } }) => ({
  ...state,
  toDos: state.toDos.filter(toDo => toDo.id !== id)
});


export default removeItem;
