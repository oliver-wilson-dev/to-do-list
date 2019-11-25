import setCookie from '../cookieUtilities/setCookie';

const setEditState = ({ state }) => ({ payload: { id, editState, description } }) => {
  const tasks = state.tasks.map(task => (task.id === id
    ? {
      ...task,
      editing: editState,
      description: task.editing === true
        ? description
        : task.description
    }
    : task));

  setCookie({ name: 'tasks', value: JSON.stringify(tasks) });

  return {
    ...state,
    tasks
  };
};


export default setEditState;
