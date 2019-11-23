import { INCREMENT_COUNT } from '../../actions/constants';
import incrementCount from './reduceCases/incrementCount';
import getInitialState from './getInitialState';


const countReducer = (state = getInitialState(), action) => new Proxy({
  [INCREMENT_COUNT]: incrementCount({ state }),
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases
    ? reduceCases[actionType]()
    : state)
})[action.type];

export default countReducer;
