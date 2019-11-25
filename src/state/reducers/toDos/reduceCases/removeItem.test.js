import removeItem from './removeItem';

describe('removeItem reduce case', () => {
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
    and remove the item that matches the id provided`, () => {
      expect(removeItem({ state: mockState })({
        payload: {
          id: mockId,
        }
      })).toEqual({
        ...mockState,
        toDos: [secondTask]
      });
    });
  });

  describe('when the id provided does not match the id of a task', () => {
    it('should return the previously existing values from state', () => {
      expect(removeItem({ state: mockState })({
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
