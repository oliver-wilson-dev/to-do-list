import {
  REMOVE_TASK, ADD_TASK, SET_EDIT_STATE, MARK_COMPLETE
} from '../../actions/constants';
import removeTask from './reduceCases/removeTask';
import addTask from './reduceCases/addTask';
import getInitialState from './getInitialState';
import setEditState from './reduceCases/setEditState';
import markComplete from './reduceCases/markComplete';

const tasksReducer = (state = getInitialState(), action) => new Proxy({
  [REMOVE_TASK]: removeTask({ state }),
  [ADD_TASK]: addTask({ state }),
  [SET_EDIT_STATE]: setEditState({ state }),
  [MARK_COMPLETE]: markComplete({ state })
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases
    ? reduceCases[actionType]({ payload: action.payload })
    : state)
})[action.type];

export default tasksReducer;
