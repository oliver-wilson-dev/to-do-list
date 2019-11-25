const setEditState = ({ state }) => ({ payload: { id, editState, description } }) => ({
  ...state,
  tasks: state.tasks.map(task => (task.id === id
    ? {
      ...task,
      editing: editState,
      description: task.editing === true
        ? description
        : task.description
    }
    : task))
});


export default setEditState;
