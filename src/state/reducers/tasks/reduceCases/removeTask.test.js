import removeTask from './removeTask';
import setCookie from '../cookieUtilities/setCookie';

jest.mock('../cookieUtilities/setCookie');

describe('removeTask reduce case', () => {
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
    and remove the task that matches the id provided`, () => {
      expect(removeTask({ state: mockState })({
        payload: {
          id: mockId,
        }
      })).toEqual({
        ...mockState,
        tasks: [secondTask]
      });
    });

    it('should call setCookie with the tasks', () => {
      removeTask({ state: mockState })({
        payload: {
          id: mockId,
        }
      });

      expect(setCookie).toHaveBeenCalledWith({
        name: 'tasks',
        value: JSON.stringify([secondTask])
      });
    });
  });

  describe('when the id provided does not match the id of a task', () => {
    it('should return the previously existing values from state', () => {
      expect(removeTask({ state: mockState })({
        payload: {
          id: Symbol('some-other-id'),
        }
      })).toEqual({
        ...mockState,
        tasks: [...mockState.tasks]
      });
    });

    it('should call setCookie with the tasks', () => {
      removeTask({ state: mockState })({
        payload: {
          id: Symbol('some-other-id'),
        }
      });

      expect(setCookie).toHaveBeenCalledWith({
        name: 'tasks',
        value: JSON.stringify([...mockState.tasks])
      });
    });
  });
});
