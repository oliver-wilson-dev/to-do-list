import removeTask from './removeTask';
import { REMOVE_TASK } from './constants';

describe('removeTask', () => {
  it('should return an object with the type property REMOVE_TASK and the payload should contain the id of a task', () => {
    const mockId = Symbol('test-id');
    expect(removeTask({ id: mockId }))
      .toEqual({
        type: REMOVE_TASK,
        payload: {
          id: mockId
        }
      });
  });
});
