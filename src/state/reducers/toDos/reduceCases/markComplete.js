const markComplete = ({ state }) => ({ payload: { id } }) => ({
  ...state,
  toDos: state.toDos.map(item => (item.id === id
    ? {
      ...item,
      complete: !item.complete
    }
    : item))
});


export default markComplete;
