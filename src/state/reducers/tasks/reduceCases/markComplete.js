const markComplete = ({ state }) => ({ payload: { id } }) => ({
  ...state,
  tasks: state.tasks.map(task => (task.id === id
    ? {
      ...task,
      complete: !task.complete
    }
    : task))
});


export default markComplete;
