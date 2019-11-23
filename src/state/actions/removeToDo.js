import { REMOVE_TO_DO } from './constants';

const removeToDo = ({ id }) => ({
  type: REMOVE_TO_DO,
  payload: {
    id
  }
});

export default removeToDo;
