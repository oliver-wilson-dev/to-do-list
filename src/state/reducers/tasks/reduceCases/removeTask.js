const removeTask = ({ state }) => ({ payload: { id } }) => ({
  ...state,
  tasks: state.tasks.filter(toDo => toDo.id !== id)
});


export default removeTask;
