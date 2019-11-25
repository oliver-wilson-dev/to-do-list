import setCookie from '../cookieUtilities/setCookie';

const addTask = ({ state }) => ({ payload: { id, description } }) => {
  const tasks = [...state.tasks, {
    id, description, complete: false, editing: false
  }];

  setCookie({ name: 'tasks', value: JSON.stringify(tasks) });
  return {
    ...state,
    tasks
  };
};


export default addTask;
