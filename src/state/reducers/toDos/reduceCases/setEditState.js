const setEditState = ({ state }) => ({ payload: { id, editState, description } }) => ({
  ...state,
  toDos: state.toDos.map(item => (item.id === id
    ? {
      ...item,
      editing: editState,
      description: item.editing === true
        ? description
        : item.description
    }
    : item))
});


export default setEditState;
