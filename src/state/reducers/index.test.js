import { combineReducers } from 'redux';
import toDos from './toDos';

jest.mock('redux', () => ({
  combineReducers: jest.fn()
}));
jest.mock('./toDos');

const mockCombineReducers = Symbol('test-combine-reducers');

describe('reducer', () => {
  beforeEach(() => {
    toDos.mockReturnValueOnce(Symbol('test-toDos-reducer'));
    combineReducers.mockReturnValueOnce(mockCombineReducers);
  });

  it('should return the result of combineReducers', () => {
    expect(require('./').default).toBe(mockCombineReducers);
  });

  it('should call combineReducers with the imported reducers', () => {
    require('./');
    expect(combineReducers).toHaveBeenCalledWith({ toDos });
  });
});
