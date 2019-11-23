import { REMOVE_TO_DO, ADD_TO_DO } from '../../actions/constants';
import removeItem from './reduceCases/removeItem';
import addItem from './reduceCases/addItem';
import getInitialState from './getInitialState';


const countReducer = (state = getInitialState(), action) => new Proxy({
  [REMOVE_TO_DO]: removeItem({ state }),
  [ADD_TO_DO]: addItem({ state }),
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases
    ? reduceCases[actionType]({ payload: action.payload })
    : state)
})[action.type];

export default countReducer;
