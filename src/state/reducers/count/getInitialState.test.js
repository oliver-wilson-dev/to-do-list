import getInitialState from './getInitialState';

describe('getInitialState', () => {
  it('should return the initial state, detailing a count value of 0', () => {
    expect(getInitialState()).toEqual({ count: 0 });
  });
});
