const removeItem = ({ state }) => ({ payload: { id, description } }) => ({
  ...state,
  toDos: [{ id, description }, ...state.toDos]
});


export default removeItem;
