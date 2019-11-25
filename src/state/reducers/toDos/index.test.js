import tasksReducer from '.';
import {
  REMOVE_TO_DO, ADD_TO_DO, SET_EDIT_STATE, MARK_COMPLETE
} from '../../actions/constants';
import addItem from './reduceCases/addItem';
import getInitialState from './getInitialState';
import markComplete from './reduceCases/markComplete';
import removeItem from './reduceCases/removeItem';
import setEditState from './reduceCases/setEditState';

jest.mock('./reduceCases/addItem');
jest.mock('./getInitialState');
jest.mock('./reduceCases/markComplete');
jest.mock('./reduceCases/removeItem');
jest.mock('./reduceCases/setEditState');

const mockInitialState = {
  [Symbol('some-key')]: Symbol('some-value')
};

const mockAddItemCallBack = jest.fn();
const mockMarkCompleteCallback = jest.fn();
const mockRemoveItemCallback = jest.fn();
const mockSetEditStateCallback = jest.fn();

describe('task reducer', () => {
  beforeEach(() => {
    addItem.mockReturnValueOnce(mockAddItemCallBack);
    getInitialState.mockReturnValueOnce(mockInitialState);
    markComplete.mockReturnValueOnce(mockMarkCompleteCallback);
    removeItem.mockReturnValueOnce(mockRemoveItemCallback);
    setEditState.mockReturnValueOnce(mockSetEditStateCallback);
    jest.clearAllMocks();
  });

  const actionAssertions = ({ action, actionName, callback }) => {
    describe('when there is no initialState', () => {
      it('should call getInitialState', () => {
        tasksReducer(undefined, action);

        expect(getInitialState).toHaveBeenCalled();
      });

      it(`should call the ${actionName} reduce case with the current state`, () => {
        tasksReducer(undefined, action);

        expect(removeItem).toHaveBeenCalledWith({ state: mockInitialState });
      });

      it(`should call the ${actionName} reduce case callback with the action payload`, () => {
        const mockPayload = Symbol('test-payload');
        tasksReducer(undefined, { ...action, payload: mockPayload });

        expect(callback).toHaveBeenCalledWith({ payload: mockPayload });
      });
    });

    describe('when there is an initialState', () => {
      const initialState = Symbol('test-initial-state');
      it('should not call getInitialState', () => {
        tasksReducer(initialState, action);

        expect(getInitialState).not.toHaveBeenCalled();
      });

      it(`should call the ${actionName} reduce case with the current state`, () => {
        tasksReducer(initialState, action);

        expect(removeItem).toHaveBeenCalledWith({ state: initialState });
      });
    });
  };

  describe.each`
  ACTION_TYPE       | ACTION_NAME       | CALLBACK
  ${REMOVE_TO_DO}   | ${'removeItem'}   | ${mockRemoveItemCallback}
  ${ADD_TO_DO}      | ${'addItem'}      | ${mockAddItemCallBack}
  ${SET_EDIT_STATE} | ${'setEditState'} | ${mockSetEditStateCallback}
  ${MARK_COMPLETE}  | ${'markComplete'} | ${mockMarkCompleteCallback}
`('when the action type is $ACTION_TYPE', ({ ACTION_TYPE, ACTION_NAME, CALLBACK }) => {
  actionAssertions({
    action: {
      type: ACTION_TYPE,
      payload: Symbol('test-payload')
    },
    actionName: ACTION_NAME,
    callback: CALLBACK
  });
});


  describe('when the action type is not any of the predefined action types', () => {
    describe('when no state is provided', () => {
      it('should return the initial state', () => {
        expect(tasksReducer(undefined, { type: 'some-other-action' })).toBe(mockInitialState);
      });
    });

    describe('when state is provided', () => {
      it('should return the initial state', () => {
        const state = Symbol('test-state');
        expect(tasksReducer(state, { type: 'some-other-action' })).toBe(state);
      });
    });
  });
});
