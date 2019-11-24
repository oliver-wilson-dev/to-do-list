import { MARK_COMPLETE } from './constants';

const markComplete = ({ id }) => ({
  type: MARK_COMPLETE,
  payload: {
    id
  }
});

export default markComplete;
