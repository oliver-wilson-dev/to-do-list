import { combineReducers } from 'redux';
import tasks from './tasks';

jest.mock('redux', () => ({
  combineReducers: jest.fn()
}));
jest.mock('./tasks');

const mockCombineReducers = Symbol('test-combine-reducers');

describe('reducer', () => {
  beforeEach(() => {
    tasks.mockReturnValueOnce(Symbol('test-tasks-reducer'));
    combineReducers.mockReturnValueOnce(mockCombineReducers);
  });

  it('should return the result of combineReducers', () => {
    expect(require('./').default).toBe(mockCombineReducers);
  });

  it('should call combineReducers with the imported reducers', () => {
    require('./');
    expect(combineReducers).toHaveBeenCalledWith({ tasks });
  });
});
