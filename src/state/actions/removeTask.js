import { REMOVE_TASK } from './constants';

const removeTask = ({ id }) => ({
  type: REMOVE_TASK,
  payload: {
    id
  }
});

export default removeTask;
