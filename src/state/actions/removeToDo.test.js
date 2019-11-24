import removeToDo from './removeToDo';
import { REMOVE_TO_DO } from './constants';

describe('removeToDo', () => {
  it('should return an object with the type property REMOVE_TO_DO and the payload should contain the id of a task', () => {
    const mockId = Symbol('test-id');
    expect(removeToDo({ id: mockId }))
      .toEqual({
        type: REMOVE_TO_DO,
        payload: {
          id: mockId
        }
      });
  });
});
