import getInitialState from './getInitialState';
import { INITIAL_STATE } from './constants';

describe('getInitialState', () => {
  it('should return the initial state', () => {
    expect(getInitialState()).toEqual(INITIAL_STATE);
  });
});
