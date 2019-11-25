import tasksReducer from '.';
import {
  REMOVE_TASK, ADD_TASK, SET_EDIT_STATE, MARK_COMPLETE
} from '../../actions/constants';
import addTask from './reduceCases/addTask';
import getInitialState from './getInitialState';
import markComplete from './reduceCases/markComplete';
import removeTask from './reduceCases/removeTask';
import setEditState from './reduceCases/setEditState';

jest.mock('./reduceCases/addTask');
jest.mock('./getInitialState');
jest.mock('./reduceCases/markComplete');
jest.mock('./reduceCases/removeTask');
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
    addTask.mockReturnValueOnce(mockAddItemCallBack);
    getInitialState.mockReturnValueOnce(mockInitialState);
    markComplete.mockReturnValueOnce(mockMarkCompleteCallback);
    removeTask.mockReturnValueOnce(mockRemoveItemCallback);
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

        expect(removeTask).toHaveBeenCalledWith({ state: mockInitialState });
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

        expect(removeTask).toHaveBeenCalledWith({ state: initialState });
      });
    });
  };

  describe.each`
  ACTION_TYPE       | ACTION_NAME       | CALLBACK
  ${REMOVE_TASK}   | ${'removeTask'}   | ${mockRemoveItemCallback}
  ${ADD_TASK}      | ${'addTask'}      | ${mockAddItemCallBack}
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
