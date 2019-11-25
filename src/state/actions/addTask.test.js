import addTask from './addTask';
import { ADD_TASK } from './constants';

describe('addTask', () => {
  it('should return an object with the type property ADD_TASK and the payload should contain the id of a task and the description', () => {
    const mockDescription = 'test-description';
    expect(addTask({ description: mockDescription }))
      .toEqual({
        type: ADD_TASK,
        payload: {
          description: mockDescription,
          id: expect.anything() /* does not support expect.any(Symbol) */
        }
      });
  });
});
