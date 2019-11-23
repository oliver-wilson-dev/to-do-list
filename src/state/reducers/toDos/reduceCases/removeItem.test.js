import incrementCount from './incrementCount';

const mockState = {
  count: 0,
  'some-property': Symbol('test-some-other-property')
};

describe('incrementCount', () => {
  it('should increment the count and preserve properties in state', () => {
    expect(incrementCount({ state: mockState })())
      .toEqual({ ...mockState, count: mockState.count + 1 });
  });
});
