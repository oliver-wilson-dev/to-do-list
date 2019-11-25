const addTask = ({ state }) => ({ payload: { id, description } }) => ({
  ...state,
  tasks: [...state.tasks, { id, description }]
});


export default addTask;
