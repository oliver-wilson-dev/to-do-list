import { combineReducers } from 'redux';
import count from './count';

jest.mock('redux', () => ({
  combineReducers: jest.fn()
}));
jest.mock('./count');

const mockCombineReducers = Symbol('test-combine-reducers');

describe('reducer', () => {
  beforeEach(() => {
    count.mockReturnValueOnce(Symbol('test-count-reducer'));
    combineReducers.mockReturnValueOnce(mockCombineReducers);
  });

  it('should return the result of combineReducers', () => {
    expect(require('./').default).toBe(mockCombineReducers);
  });

  it('should call combineReducers with the imported reducers', () => {
    require('./');
    expect(combineReducers).toHaveBeenCalledWith({ count });
  });
});
