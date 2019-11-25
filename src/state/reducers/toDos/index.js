import {
  REMOVE_TO_DO, ADD_TO_DO, SET_EDIT_STATE, MARK_COMPLETE
} from '../../actions/constants';
import removeItem from './reduceCases/removeItem';
import addItem from './reduceCases/addItem';
import getInitialState from './getInitialState';
import setEditState from './reduceCases/setEditState';
import markComplete from './reduceCases/markComplete';


const tasksReducer = (state = getInitialState(), action) => new Proxy({
  [REMOVE_TO_DO]: removeItem({ state }),
  [ADD_TO_DO]: addItem({ state }),
  [SET_EDIT_STATE]: setEditState({ state }),
  [MARK_COMPLETE]: markComplete({ state })
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases
    ? reduceCases[actionType]({ payload: action.payload })
    : state)
})[action.type];

export default tasksReducer;
