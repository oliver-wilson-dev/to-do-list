import getCookie from './cookieUtilities/getCookie';
import { INITIAL_STATE } from './constants';
import { TASKS_COOKIE } from './cookieUtilities/constants';


const getInitialState = () => {
  const jsonTasks = getCookie({ name: TASKS_COOKIE });

  return {
    tasks: jsonTasks ? JSON.parse(jsonTasks).map(task => ({
      ...task,
      id: Symbol('task-id')
    }))
      : INITIAL_STATE
  };
};

export default getInitialState;
