import { SET_EDIT_STATE } from './constants';

const setEditState = ({ id, editState, description }) => ({
  type: SET_EDIT_STATE,
  payload: {
    id,
    editState,
    description
  }
});

export default setEditState;
