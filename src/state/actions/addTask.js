import { ADD_TASK } from './constants';

const addTask = ({ description }) => ({
  type: ADD_TASK,
  payload: {
    id: Symbol('to-do-item'),
    description
  }
});

export default addTask;
