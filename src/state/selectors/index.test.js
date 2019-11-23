import {
  getCount
} from '.';

describe('getCount', () => {
  it('returns the count property in state', () => {
    const mockCount = Symbol('test-use-light-count');
    expect(getCount({ count: { count: mockCount } })).toEqual(
      mockCount
    );
  });
});
