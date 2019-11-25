const addItem = ({ state }) => ({ payload: { id, description } }) => ({
  ...state,
  toDos: [...state.toDos, { id, description }]
});


export default addItem;
