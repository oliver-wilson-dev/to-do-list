import setCookie from '../cookieUtilities/setCookie';

const removeTask = ({ state }) => ({ payload: { id } }) => {
  const tasks = state.tasks.filter(toDo => toDo.id !== id);

  setCookie({ name: 'tasks', value: JSON.stringify(tasks) });

  return {
    ...state,
    tasks
  };
};


export default removeTask;
