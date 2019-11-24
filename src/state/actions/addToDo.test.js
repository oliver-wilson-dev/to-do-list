import addToDo from './addToDo';
import { ADD_TO_DO } from './constants';

describe('addToDo', () => {
  it('should return an object with the type property ADD_TO_DO and the payload should contain the id of a task and the description', () => {
    const mockDescription = 'test-description';
    expect(addToDo({ description: mockDescription }))
      .toEqual({
        type: ADD_TO_DO,
        payload: {
          description: mockDescription,
          id: expect.anything() /* does not support expect.any(Symbol) */
        }
      });
  });
});
