import incrementCount from './incrementCount';
import { INCREMENT_COUNT } from './constants';

describe('incrementCount', () => {
  it('should return an object with the type property INCREMENT_COUNT', () => {
    expect(incrementCount()).toEqual({ type: INCREMENT_COUNT });
  });
});
