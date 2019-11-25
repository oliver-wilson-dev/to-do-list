import { combineReducers } from 'redux';
import tasks from './tasks';
import reducers from '.';

jest.mock('redux', () => ({
  combineReducers: jest.fn()
}));
jest.mock('./tasks');

const mockCombineReducers = Symbol('test-combine-reducers');

describe('reducer', () => {
  beforeEach(() => {
    tasks.mockReturnValueOnce(Symbol('test-tasks-reducer'));
    combineReducers.mockReturnValueOnce(mockCombineReducers);
    jest.clearAllMocks();
  });

  it('should return the result of combineReducers', () => {
    expect(reducers()).toBe(mockCombineReducers);
  });

  it('should call combineReducers with the imported reducers', () => {
    reducers();
    expect(combineReducers).toHaveBeenCalledWith({ tasks });
  });
});
