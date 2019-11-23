import themeReducer from '.';
import { INCREMENT_COUNT } from '../../actions/constants';
import incrementCount from './reduceCases/incrementCount';
import getInitialState from './getInitialState';

jest.mock('./reduceCases/incrementCount');
jest.mock('./getInitialState');

const mockInitialState = {
  [Symbol('some-key')]: Symbol('some-value')
};

const mockIncrementCountCallback = jest.fn();

describe('count reducer', () => {
  beforeEach(() => {
    getInitialState.mockReturnValueOnce(mockInitialState);
    incrementCount.mockReturnValueOnce(mockIncrementCountCallback);
    jest.clearAllMocks();
  });


  describe('when the action type is INCREMENT_COUNT', () => {
    const incrementCountAction = {
      type: INCREMENT_COUNT
    };

    describe('when there is no initialState', () => {
      it('should call getInitialState', () => {
        themeReducer(undefined, incrementCountAction);

        expect(getInitialState).toHaveBeenCalled();
      });

      it('should call the incrementCount reduce case with the current state', () => {
        themeReducer(undefined, incrementCountAction);

        expect(incrementCount).toHaveBeenCalledWith({ state: mockInitialState });
      });

      it('should call the incrementCount reduce case callback', () => {
        themeReducer(undefined, incrementCountAction);

        expect(mockIncrementCountCallback).toHaveBeenCalled();
      });
    });

    describe('when there is an initialState', () => {
      const initialState = Symbol('test-initial-state');
      it('should not call getInitialState', () => {
        themeReducer(initialState, incrementCountAction);

        expect(getInitialState).not.toHaveBeenCalled();
      });

      it('should call the incrementCount reduce case with the current state', () => {
        themeReducer(initialState, incrementCountAction);

        expect(incrementCount).toHaveBeenCalledWith({ state: initialState });
      });
    });
  });

  describe('when the action type is not any of the predefined action types', () => {
    describe('when no state is provided', () => {
      it('should return the initial state', () => {
        expect(themeReducer(undefined, { type: 'some-other-action' })).toBe(mockInitialState);
      });
    });

    describe('when state is provided', () => {
      it('should return the initial state', () => {
        const state = Symbol('test-state');
        expect(themeReducer(state, { type: 'some-other-action' })).toBe(state);
      });
    });
  });
});
