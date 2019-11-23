import { ADD_TO_DO } from './constants';

const addToDo = ({ description }) => ({
  type: ADD_TO_DO,
  payload: {
    id: Symbol('to-do-item'),
    description
  }
});

export default addToDo;
