import markComplete from './markComplete';
import { MARK_COMPLETE } from './constants';

describe('markComplete', () => {
  it('should return an object with the type property MARK_COMPLETE and the payload should contain the id of a task', () => {
    const mockId = Symbol('test-id');
    expect(markComplete({ id: mockId }))
      .toEqual({
        type: MARK_COMPLETE,
        payload: {
          id: mockId
        }
      });
  });
});
