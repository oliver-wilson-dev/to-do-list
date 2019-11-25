import setCookie from '../cookieUtilities/setCookie';

const markComplete = ({ state }) => ({ payload: { id } }) => {
  const tasks = state.tasks.map(task => (task.id === id
    ? {
      ...task,
      complete: !task.complete
    }
    : task));

  setCookie({ name: 'tasks', value: JSON.stringify(tasks) });

  return {
    ...state,
    tasks
  };
};


export default markComplete;
