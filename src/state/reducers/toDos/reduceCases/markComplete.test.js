import markComplete from './markComplete';

describe('markComplete reduce case', () => {
  const mockId = Symbol('test-id');
  const mockComplete = false;
  const mockDescription = Symbol('test-description');

  const firstTask = {
    id: mockId,
    description: mockDescription,
    complete: mockComplete
  };

  const secondTask = {
    id: Symbol('test-id'),
    description: Symbol('test-description'),
    complete: mockComplete
  };

  const mockState = {
    [Symbol('test-key')]: Symbol('test-value'),
    toDos: [firstTask, secondTask]
  };

  describe('when the id provided matches the id of a task', () => {
    it(`should return the previously existing values from state, 
    and should mark the complete property of the task in question to true`, () => {
      expect(markComplete({ state: mockState })({
        payload: {
          id: mockId,
        }
      })).toEqual({
        ...mockState,
        toDos: [{ ...firstTask, complete: !firstTask.complete }, secondTask]
      });
    });
  });

  describe('when the id provided does not match the id of a task', () => {
    it(`should return the previously existing values from state, 
    and should mark the complete property of the task in question to true`, () => {
      expect(markComplete({ state: mockState })({
        payload: {
          id: Symbol('some-other-id'),
        }
      })).toEqual({
        ...mockState,
        toDos: [...mockState.toDos]
      });
    });
  });
});
