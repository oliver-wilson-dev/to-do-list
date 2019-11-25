import markComplete from './markComplete';
import setCookie from '../cookieUtilities/setCookie';

jest.mock('../cookieUtilities/setCookie');

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
    tasks: [firstTask, secondTask]
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
        tasks: [{ ...firstTask, complete: !firstTask.complete }, secondTask]
      });
    });

    it('should call setCookie with the tasks', () => {
      const mockId = 'test-id';

      markComplete({ state: mockState })({
        payload: {
          id: mockId
        }
      });

      expect(setCookie).toHaveBeenCalledWith({
        name: 'tasks',
        value: JSON.stringify([{
          ...firstTask,
          complete: !firstTask.complete
        },
        secondTask])
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
        tasks: [...mockState.tasks]
      });
    });

    it('should call setCookie with the tasks', () => {
      const mockId = 'test-id';

      markComplete({ state: mockState })({
        payload: {
          id: mockId
        }
      });

      expect(setCookie).toHaveBeenCalledWith({
        name: 'tasks',
        value: JSON.stringify([{
          ...firstTask,
          complete: !firstTask.complete
        },
        secondTask])
      });
    });
  });
});
